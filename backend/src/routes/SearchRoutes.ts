import { Router } from "express";
import { cityString } from "../utils/api";
import { Cities } from "../entity/Cities";

const searchRouter = Router();

interface ApiResponseInterface {
  cod: number;
  id: number;
  name: string;
}

searchRouter.get("/:name", async (req, res) => {
  const name = req.params.name;

  if (!name) {
    return res.status(400).json({ msg: "missing city name" });
  }

  try {
    const result: ApiResponseInterface = await cityString(name);

    if (result && result.cod === 200) {
      const dbResult = await Cities.findOne({ city_id: result.id });

      if (dbResult === undefined) {
        const newCity = new Cities();
        newCity.city_id = result.id;
        const now = new Date();
        newCity.last_searched = now.toString();

        try {
          console.log(newCity);
          await newCity.save();
        } catch (error) {
          console.log(error);
          return res.status(500).json({ msg: "Failed to save in database" });
        }
      } else {
        dbResult.searched += 1;
        await dbResult.save();
      }

      return res.status(200).json(result);
    }
  } catch (error) {
    console.log(error);
    return res.status(404).json({ msg: "City not found" });
  }

  return res.status(200).json({ msg: "all good", param: name });
});

export default searchRouter;
