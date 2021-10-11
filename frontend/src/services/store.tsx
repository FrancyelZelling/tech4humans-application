import React, { useState } from "react";
import { useContext } from "react";
import { SearchCityResponse } from "./api";

export interface ApiCityInterface {
  id: string;
  city_name: string;
  city_id: number;
  searched: number;
  last_searched: string;
}

interface ContextInterface {
  city: SearchCityResponse;
  loading: boolean;
  apiCity: ApiCityInterface[];
}

const StoreContext = React.createContext<any>({});
export const useStore = () => useContext(StoreContext);

export const Provider: React.FC = ({ children }) => {
  const [city, setCity] = useState<SearchCityResponse>();
  const [loading, setLoading] = useState(false);
  const [apiCity, setApiCity] = useState<ApiCityInterface[]>();
  const [last, setLast] = useState<ApiCityInterface[]>();

  const value = {
    city,
    loading,
    apiCity,
    last,
    setCity,
    setLoading,
    setApiCity,
    setLast,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
