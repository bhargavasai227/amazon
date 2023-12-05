
import React from "react";
import { useSelector } from "react-redux";
import Stripe from "./Strip";

const Total = () => {
  const items:[] = useSelector((state:{counter:any}) => state.counter.value);

  const totalAmount = items.reduce((total, item:{price:number}) => {
    return total + item.price;
  }, 0);

  return <div className="fixed bottom-0 w-full flex max-h-60 ">
   <div className=" m-3 w-3/4 bg-gray-800 p-5 text-white rounded-md">
    <div className="my-4">{items.map((e:{title:string,price:string,id:number})=>(<div key={e.id} className="flex justify-between "><span>{e.title}</span><p className="text-yellow-300">${e.price}</p></div>))}
    <hr/>
    <div className="flex justify-between py-4"><div>Total Amount: </div><div>${totalAmount}</div></div></div>
    </div>
  
    <div ><Stripe/></div>
   
    </div>;
};

export default Total;
