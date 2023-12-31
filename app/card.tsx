'use client';
import Image from "next/image";
import pac from "../public/Pacman.gif"
import { useState } from "react";
import {useRouter} from "next/navigation";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react"
export default function Card(p: { data: { title: string; category: string | null | undefined; image: string | undefined; price: string  | null | undefined; description: string } }){
    const[load,setLoad]=useState(true);
    const router =useRouter();
    function clicked(){
   
    router.push(`/${p.data.category}?name=${p.data.title}`)
    
}
return(
<div className="m-2 bg-white w-[10rem] h-full p-3 rounded-lg py-2 drop-shadow-xl " key={p.data.title.slice(0,8)} onClick={clicked}><div>
<h3 className="bg-red-300 m-l pl-1">{p.data.category}</h3>
    <h4>{p.data.title.slice(0,20)+"..."}</h4>
    <div className="h-full w-[90%] object-cover ">
        {load&&<div className="h-[6rem] flex justify-center  items-center rounded-md "><Image src={pac}  alt="loading" className="gif "/></div>}
    {<img src={p.data.image} alt="img" style={{"display":load?"none":"block"}} className="max-h-32 min-h-28 min-w-16 Mimg" onLoad={()=>setLoad(false)} />}
    </div>
    <h3 className="">${p.data.price}</h3>
    <p>{p.data.description.slice(0,30)+"..."}</p>
    
</div></div>)
}
