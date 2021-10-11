import React, { ChangeEvent, useState } from "react";
import {
  SearchCity,
  lastSearchedCities,
  topFiveCities,
} from "../../services/api";
import { useStore } from "../../services/store";
import "./styles.css";

export const SearchBar = () => {
  const [search, setSearch] = useState("");

  const { setLoading, setCity, setLast, setApiCity } = useStore();

  const UpdateHistory = async () => {
    const data1 = await lastSearchedCities();
    setLast(data1);
    const data2 = await topFiveCities();
    setApiCity(data2);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const data = await SearchCity(search);
    console.log(data);
    setCity(data);
    setLoading(false);
    UpdateHistory();
  };

  return (
    <div className="search-input">
      <form onSubmit={handleSubmit}>
        <label>Busque uma cidade(não incluir acentos na pesquisa)</label>
        <input
          type="text"
          placeholder="Procurar...(Aperte Enter para procurar)"
          className="search-input"
          value={search}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};
