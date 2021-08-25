import { useEffect, useState } from "react";
import { AutocompleteView } from "../views";
import axios from "axios";
import { BASE_URL, KEY } from "../const";

const ListCurrency = ({ value, setValue }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/symbols?access_key=${KEY}`).then((res) => {
      const { symbols } = res.data;
      const currencies = Object.entries(symbols);
      setList(currencies);
    });
  }, []);

  return <AutocompleteView listCurrency={list} value={value} setValue={setValue}/>;
};

export default ListCurrency;
