import useInputState from "../Hooks/useInputState";


const HookForm = () => {
   const emailState = useInputState();
    const handleSubmit = e =>{
        e.preventDefault()
        console.log('clicked', emailState.value)
    }
    return (
        <div>
             <form onSubmit={handleSubmit}>
                <input {...emailState} type="email" name="email" id="" />
                {/* <input value={email} onChange={handleEmailChange} type="email" name="email" id="" /> */}
                <br />
                <input type="password" name="password"/>
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default HookForm;