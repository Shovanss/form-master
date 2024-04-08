import { useContext } from "react";
import { MoneyContext } from "../Grandpa/Grandpa";


const Uncle = () => {
    const [money,useMoney] = useContext(MoneyContext);
    return (
        <div>
           <h3>Uncle</h3> 
           <p>Price : {money}</p>
           <button onClick={()=>{
            useMoney(money+1000)
           }}>Add 1000</button>
        </div>
    );
};

export default Uncle;