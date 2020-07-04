import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { fetchCountriesName } from "../../Api";

const CountryPicker = () => {
  const [countryPicker, setcountryPicker] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      setcountryPicker(await fetchCountriesName);
    };
    fetchCountries();
  }, [countryPicker]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect>
        <option value="global">Global</option>
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
