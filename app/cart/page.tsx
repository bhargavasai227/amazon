"use client";
import Item from "./Items";
import { useSelector } from "react-redux";
export default function Home(){
  const count = useSelector((state:any) => state.counter.value);

    return(count&&
    <div className="grid ">{count.map((e)=>
      (<div key={e.id}><Item ele={e} /></div>)
    )}
    
    </div>)
}