import { useEffect, useState } from "react";
import axios from "axios";
import StockCard from "../components/StockCard";

export default function Stocks() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    axios.get("https://nivesh-yatra-1x38.onrender.com/api/stocks")
      .then(res => setStocks(res.data))
      .catch(err => console.error("Error:", err));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
      {stocks.map((s, i) => (
        <StockCard key={i} stock={s} />
      ))}
    </div>
  );
}
