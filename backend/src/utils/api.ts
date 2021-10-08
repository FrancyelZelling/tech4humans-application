import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.API_KEY;

export const cityString = async (cityName: string) => {
  const result = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&lang=pt_br&units=metric`
  );

  return result.data;
};
