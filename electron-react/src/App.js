import { useEffect, useState } from "react";
import { KEY, BASE_URL } from "./const";
import axios from "axios";
import { Main, CurrentDate, Prompt, ProgressBar } from "./views";
import { ListCurrency, CardCountry } from "./components";

const App = () => {
  const [rates, setRates] = useState([]);
  const [date, setDate] = useState(0);
  const [value, setValue] = useState(null);
  const [ready, setReady] = useState(false);
  const [connect, setConnect] = useState(true);

  useEffect(() => {
    let idTimer;
    axios
      .get(`${BASE_URL}/latest?access_key=${KEY}`)
      .then((res) => {
        const { rates, date } = res.data;
        setRates(rates);
        setDate(date);
        idTimer = setTimeout(() => setReady(true), 1000);
      })
      .catch((e) => {
        setConnect(false);
        console.log(e);
      });
    return () => {
      clearTimeout(idTimer);
    };
  }, []);

  return (
    <Main>
      {ready ? (
        <>
          <ListCurrency value={value} setValue={setValue} />
          <CurrentDate date={date} />
          {value?.[0] ? (
            <CardCountry country={value} rates={rates} />
          ) : (
            <Prompt variant="body1">Choose currency...</Prompt>
          )}
        </>
      ) : connect ? (
        <ProgressBar />
      ) : (
        <Prompt variant="h5">
          Server unavailable please try again later...
        </Prompt>
      )}
    </Main>
  );
};

export default App;