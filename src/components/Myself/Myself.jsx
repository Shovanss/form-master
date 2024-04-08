import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";


const Myself = ({asset}) => {
    const gift = useContext(AssetContext)
    return (
        <div>
           <h4>Special : {asset}</h4> 
           <p>Also : {gift}</p>
        </div>
    );
};

export default Myself;