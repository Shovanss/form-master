import { createContext, useState } from "react";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css'

export const AssetContext = createContext('gold')
export const MoneyContext = createContext(1000);
 

const Grandpa = () => {
    const asset = 'diamond'
    const [money,setMoney] = useState(1000)
    return (
        <div className="">
            <h3>Grandpa</h3>
            <div className="grandpa flex">
             <MoneyContext.Provider value={[money,setMoney]}>
             <AssetContext.Provider value="gold">
                <Dad asset={asset}></Dad>
                <Uncle></Uncle>
                </AssetContext.Provider>
             </MoneyContext.Provider>
                
            </div>
        </div>
    );
};

export default Grandpa;