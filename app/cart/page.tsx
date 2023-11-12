"use client";
import Item from "./Items";
import Total from "./Total";
import { useSelector } from "react-redux";
export default function Home(){
  const count :[] = useSelector((state:any) => state.counter.value);
    return(count&&
    <div>
    <div className="grid ">{count.map((e:{id:number})=>
      (<div key={e.id}><Item ele={e} /></div>)
    )}
    </div>
    <Total/>
    </div>)
}