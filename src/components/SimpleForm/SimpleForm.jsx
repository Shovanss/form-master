

const SimpleForm = () => {
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(e.target.email.value)
        console.log(e.target.phone.value)
        console.log('clicked')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" id="" />
                <br />
                <input type="text" name="phone"/>
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default SimpleForm;