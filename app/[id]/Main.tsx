"use client"
import { useDispatch } from "react-redux";
import { inserto } from "../redux/features/counters/counterSlice";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode, Key } from "react"

export default function Main(p: { p: any[]; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; image: string | undefined; id: Key | null | undefined; price: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; rating: { rate: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; count: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined }; description: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined }){
    const dispatch = useDispatch(); 
    p=p.p[0]  
  
    return(
       p&& <div>
            <div className="bg-white p-5 m-2 rounded-md">
                <div>
                <h1>{p.title}</h1>
                <img id="main" src={p.image} key={p.id}/>
                <h4>${p.price}</h4>
                <h5 className="inline">Rating : {p.rating.rate}</h5><h4 className="inline">({p.rating.count})</h4>
                <p>{p.description}</p>
                </div>
                <div >
                <button onClick={()=>{
                    dispatch(inserto(p))
                    console.log("hi");
                }}><h4>Cart</h4></button>
                <button>buy</button>
                </div>
            </div>
            
        </div>
    )
}