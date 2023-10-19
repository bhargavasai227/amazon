export default function card(p){

return(
<div className="m-2 bg-white w-[10rem] h-full p-3 rounded-lg py-2 " id={p.data.id}><div>
<h3 className="bg-red-300 m-l pl-1">{p.data.category}</h3>
    <h4>{p.data.title.slice(0,20)+"..."}</h4>
    <div className="h-full w-[90%] object-cover ">
    <img src={p.data.image} alt="img" className="max-h-32" id={p.data.id}/></div>
    <h3 className="">${p.data.price}</h3>
    <p>{p.data.description.slice(0,30)+"..."}</p>
    
</div></div>)
}