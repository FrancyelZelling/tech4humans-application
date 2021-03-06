import { Router } from "express";
import { cityString, cityId } from "../utils/api";
import { Cities } from "../entity/Cities";

const searchRouter = Router();

interface ApiResponseInterface {
  cod: number;
  id: number;
  name: string;
}

// Default route that returns last 5 searched
searchRouter.get("/", async (req, res) => {
  try {
    const lastFiveSearched = await Cities.find({
      order: {
        last_searched: "DESC",
      },
      take: 5,
    });

    console.log(lastFiveSearched);
    return res.status(200).json(lastFiveSearched);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Failed to make request to database" });
  }
});

// Search city by name
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
        newCity.city_name = result.name;
        newCity.city_id = result.id;
        const now = new Date();
        newCity.last_searched = now.toLocaleString("pt-BR");
        try {
          await newCity.save();
        } catch (error) {
          console.log(error);
          return res.status(500).json({ msg: "Failed to save in database" });
        }
      } else {
        const now = new Date();
        dbResult.last_searched = now.toLocaleString("pt-BR");
        dbResult.searched += 1;
        console.log(dbResult);
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

searchRouter.get("/top/5", async (req, res) => {
  try {
    const topFiveSearched = await Cities.find({
      order: {
        searched: "DESC",
      },
      take: 5,
    });

    return res.status(200).json(topFiveSearched);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Failed to make request to database" });
  }
});
export default searchRouter;
