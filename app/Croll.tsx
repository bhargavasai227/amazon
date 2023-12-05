import Image from "next/image"
import sale from "../public/sale.webp"
export default function Croll(){
    
    return(
        <div className="flex justify-center" >
            <Image src={sale} className="w-full  h-1/3 m-1 " alt="sale" />
    
        </div>
    )
}