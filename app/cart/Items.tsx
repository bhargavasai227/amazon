"use client"
import { useRouter } from "next/navigation"
export default function Item(e){
  const router = useRouter()
    function clicked(){
   
      router.push(`/${e.ele.category}?name=${e.ele.title}`)
      
  }
    
      return(<div onClick={clicked}>
        
        <img src={e.ele.image} alt="img" className="max-h-32 object-scale-down w-full mb-2" />
        <div >{e.ele.title.slice(0,20)+"..."}</div>
        </div>
    )
}