export default function Main(p){

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
                <button onClick={()=>{alert("clicked")}}><h4>Cart</h4></button>
                <button>buy</button>
                </div>
            </div>
            
        </div>
    )
}