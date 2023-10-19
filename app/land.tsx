'use client'
import { useState,useEffect } from 'react'
import Card from './card'
interface typed {
  id:number;
  title:string;
  price:string;
  category:string;
  description:string;
  image:string;
}
export default function Land(p) {
  var [data,setdata] =useState<any[]>([])
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products/category/'+p.cat)
    .then(res=>res.json())
    .then(json=>setdata(json))
    .catch((er)=>{console.log(er);
    })
  },[])
  return (
data&&<div className='flex  flex-auto overflow-x-scroll overflow-hidden '>
{data.map((data:any)=>(<div ><Card data={data} /></div>))}
</div>
  )
  }
