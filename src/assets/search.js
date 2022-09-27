import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { Geo_options, api_url } from "./city_api";
const Search = ({ getResult }) => {
  const [loc, setSearch] = useState(null);
  const handleOnChange = (query) => {
    setSearch(query);
    console.log(query);
    getResult(query);
  };

  const loadOptions = (query) => {
    var a;
    return fetch(
      `${api_url}/cities?minPopulation=100000&namePrefix=${query}`,
      Geo_options
    )
      .then((response) => response.json())
      .then((response) => {
        a = {
          options: response.data.map((loc) => {
            return {
              value: `${loc.latitude} ${loc.longitude}`,
              label: `${loc.name}, ${loc.countryCode}`,
            };
          }),
        };

        return a;
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="Search">
      <AsyncPaginate
        placeholder="location"
        debounceTimeout={700}
        value={loc}
        onChange={handleOnChange}
        loadOptions={loadOptions}
      />
    </div>
  );
};
export default Search;
