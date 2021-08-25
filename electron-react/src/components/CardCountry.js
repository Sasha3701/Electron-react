import { useEffect, useState } from "react";
import { CardView } from "../views"
import { CURRENCY } from "../const";

const CardCountry = ({ country, rates }) => {

  const [flag, setFlag] = useState("");
  const [rate, setRate] = useState(0)

  useEffect(() => {
    setRate(rates[country[0]])
    for(let [key, value] of Object.entries(CURRENCY)) {
      if(value === country[0]) {
        const href = `https://flagcdn.com/${key.toLowerCase()}.svg`
        setFlag(href)
      }
    }
  }, [country, rates]);

  return (
    <CardView flag={flag} country={country} rate={rate}/>
  );
};

export default CardCountry;
