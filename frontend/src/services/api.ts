import axios from "axios";

export interface SearchCityResponse {
  name: string;
  cod: number;
  id: number;
  main: {
    temp: number;
    humidity: number;
  };
  weather: [
    {
      id: number;
      description: string;
    }
  ];
}

interface Response {
  data: SearchCityResponse;
}

export const SearchCity = async (city: string) => {
  try {
    const response: Response = await axios.get(
      `http://localhost:3001/search/${city}`,
      { headers: { "Acess-Control-Allow-Origin": "*" } }
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const topFiveCities = async () => {
  try {
    const response: Response = await axios.get(
      "http://localhost:3001/search/top/5",
      { headers: { "Acess-Control-Allow-Origin": "*" } }
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const lastSearchedCities = async () => {
  try {
    const response: Response = await axios.get(
      "http://localhost:3001/search/",
      {
        headers: { "Acess-Control-Allow-Origin": "*" },
      }
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
