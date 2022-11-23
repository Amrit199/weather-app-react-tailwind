import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, GEO_API_URL } from "../api";

const Searchbar = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = async (inputValue) => {
    const response = await fetch(
      `${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${inputValue}`,
      geoApiOptions
    );
    const response_1 = await response.json();
    return {
      options: response_1.data.map((city) => {
        return {
          value: `${city.latitude} ${city.longitude}` ,
          label: `${city.name}, ${city.countryCode}`,
        };
      }),
    };
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <div className="w-full flex items-center justify-between bg-black text-white p-5">
      <div className="flex items-center w-full justify-center">
        <img src="icons/13d.png" alt="" className="w-10" />
        <p className="text-2xl">Today's Weather</p>
      </div>
      <div className="w-full">
        <AsyncPaginate
          placeholder="Search for city"
          onFocus={() => setSearch('')}
          debounceTimeout={600}
          value={search}
          onChange={handleOnChange}
          loadOptions={loadOptions}
          className="w-[60%] mx-auto text-black text-xl"
        />
      </div>
    </div>
  );
};

export default Searchbar;
