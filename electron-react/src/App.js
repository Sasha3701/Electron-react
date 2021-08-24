import { useEffect, useState } from "react"
import { KEY, BASE_URL } from "./const"
import axios from "axios"

const App = () => {

  const [rates, setRates] = useState([])
  const [date, setDate] = useState(0)

  useEffect(() => {
    axios.get(`${BASE_URL}/latest?access_key=${KEY}`).then(res => {
      const { rates, date } = res.data
      setRates(rates)
      setDate(date)
    })
  })

  return (
    <div>
      <h1>Hello Electron React App!!!</h1>
      <p>First Electron-react-app</p>
    </div>
  );
};

export default App;