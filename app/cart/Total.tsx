
import React from "react";
import { useSelector } from "react-redux";

const Total = () => {
  const items:[] = useSelector((state:{counter:any}) => state.counter.value);

  const totalAmount = items.reduce((total, item:{price:number}) => {
    return total + item.price;
  }, 0);

  return <div className="fixed bottom-0 w-full flex ">
   <div className=" m-3 w-3/4 bg-gray-800 p-4 text-white rounded-md">
    <div>{items.map((e:{title:string,price:string,id:number})=>(<div key={e.id} className="flex gap-[5rem]"><span>{e.title}</span><p>${e.price}</p></div>))}
    <div className="py-4">Total Amount:  ${totalAmount}</div></div>
    </div>
<div className="rounded-[2.2rem] w-32 h-16 max-h-24 relative  bottom-[-3] bg-orange-500 m-11 p-4 ">razorpay</div>
    </div>;
};

export default Total;
