"use client"
export default function Item(e){
    console.log(e.ele);
    
      return(<div>
        
        <img src={e.ele.image} alt="img" className="max-h-32 object-scale-down w-full mb-2" />
        <div >{e.ele.title.slice(0,20)+"..."}</div>
        </div>
    )
}