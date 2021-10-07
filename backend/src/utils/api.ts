import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.API_KEY;

export const cityString = async () => {
  const result = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=sales oliveira&appid=${apiKey}`
  );

  console.log(result.data);
};
