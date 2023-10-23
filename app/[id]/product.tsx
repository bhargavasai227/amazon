import { useEffect,useState } from "react";
import Card from "../card";
import Main from "./Main";

export default function Product(p: { p: any; }){   
   const [data,setD]=useState<any[]>([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/category/'+p.p.params.id)
            .then(res=>res.json())
            .then(json=>setD(json))
            .catch(e=>{console.log(e)})
    },[])
    const pro=p.p.searchParams.name;
    const main = data.filter(e=>e.title==pro);
    return (
        data&&<div>
        <div><Main p={main} title={undefined} image={undefined} id={undefined} price={undefined} rating={{
                rate: undefined,
                count: undefined
            }} description={undefined}/></div>
        <div className=" m-1 text-white"><h1>more products like ABOVE</h1></div>
        <div className='flex  flex-auto overflow-x-scroll overflow-hidden '>
            
        {data.map((data)=>(
        <div key={data.id} ><Card data={data} /></div>
          ))}
        </div>
        </div>
          )

}