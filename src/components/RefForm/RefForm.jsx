import { useEffect, useRef } from "react";


const RefForm = () => {
    const emailForm = useRef(null);
    const passForm = useRef(null);
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(emailForm.current.value)
        console.log(passForm.current.value)
    }
    useEffect(()=>{
        emailForm.current.focus();
    },[])
    return (
        <div>
              <form onSubmit={handleSubmit}>
                <input ref={emailForm} defaultValue={'imshovanss@gmail.com'} type="email" name="email" id="" />
                <br />
                <input ref={passForm} type="password" name="password"/>
                <br />
                <input type="submit" value="submit" />
            </form> 
        </div>
    );
};

export default RefForm;