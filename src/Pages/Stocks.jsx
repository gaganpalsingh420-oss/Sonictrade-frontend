import { useEffect, useState } from "react";
import api from "../api";

export default function Stocks(){
  const [data, setData] = useState(null);
  useEffect(()=>{
    async function load(){
      try{
        const res = await api.get("/api/stocks");
        setData(res.data);
      }catch(e){
        console.error("Failed to load stocks", e);
      }
    }
    load();
  },[]);

  if(!data) return <div>Loading...</div>;
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
