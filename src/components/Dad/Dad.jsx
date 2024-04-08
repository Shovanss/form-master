import { useContext } from "react";
import Myself from "../Myself/Myself";
import { MoneyContext } from "../Grandpa/Grandpa";


const Dad = ({asset}) => {
   const [money] = useContext(MoneyContext)
    return (
        <div>
            <h3>Dad</h3>
            <p>Add : {money}</p>
            <Myself asset={asset}></Myself>
        </div>
    );
};

export default Dad;