import Land from "./land";
import Croll from "./Croll";
export default function Home(){
    return(
    <div className="overflow space-y-5">
    <Croll/>
    <Land cat="men's clothing"/>
    <Land cat="electronics"/>
    <Land cat="jewelery"/>
    <Land cat="women's clothing"/>
    </div>
    );
}