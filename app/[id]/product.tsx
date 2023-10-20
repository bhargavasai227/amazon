export default function product(p: { p: any; }){
    const data=p.p
    console.log(data);
    
return(
    <div>{decodeURI(data.params.id)}</div>

)
}