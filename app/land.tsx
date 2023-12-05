'use client'
import { useState,useEffect } from 'react'
import Card from './card'

export default function Land(p) {
  var [data,setdata] =useState<any[]>([])
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products/category/'+p.cat)
    .then(res=>res.json())
    .then(json=>setdata(json))
    .catch((er)=>{console.log(er);
    })
  })
  return (
data&&
<div>
<p className='px-3'>{p.cat.toUpperCase()}</p>
<div className='flex  flex-auto overflow-x-scroll overflow-hidden '>
{data.map((data)=>(
<div key={data.id} ><Card data={data} /></div>
  ))}
</div>
</div>
  )
  }
