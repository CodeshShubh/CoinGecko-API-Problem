import React, { useEffect, useState } from "react";
import CoinGecko from "./CoinGecko";
import axios from "axios";
const url =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

const App = () => {
  const [Data, setData] = useState([]);
  const [isLoading , setisLoading] = useState(true)

  const fetchData = async () => {
    try {
      const { data } = await axios.get(url);
       setisLoading(false)
      console.log(data);
      setData(data)
    } catch (error) {
      console.log("Error :", error);
    }
  };
  useEffect(() => {
   fetchData()
  }, [])
  
  return (
    <div>
      <CoinGecko isLoading= {isLoading} Data = {Data} />
    </div>
  );
};

export default App;
