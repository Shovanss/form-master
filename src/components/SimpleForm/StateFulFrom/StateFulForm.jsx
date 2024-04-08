import { useState } from "react";


const StateFulForm = () => {
    const [email,setEmail] = useState(null);
    const [pass,setPass] = useState(null);
    const [error,setError] = useState('');
    const handleSubmit = e =>{
        e.preventDefault();
       if(pass.length < 6){
        setError('error')
       }
       else{
        setError('');
        console.log(email,pass)
       }
       
    }
    const handleEmail = e =>{
        console.log(e.target.value)
        setEmail(e.target.value);
    }
    const handlePass = e => {
        setPass(e.target.value)
    }
    return (
        <div>
              <form onSubmit={handleSubmit}>
                <input onChange={handleEmail} type="email" name="email" id="" />
                <br />
               <input onChange={handlePass}  type="password" name="password" id="" />
                <br />
                <input type="submit" value="submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StateFulForm;