import { Children } from "react";


const ReusableForm = ({children,handleSubmit,handleBtnSubmit = 'Submit'}) => {
   
    const handleLocalSubmit = e => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
        }
        handleSubmit(data)
    }
    return (
        <div>
            {children}
             <form onSubmit={handleLocalSubmit}>
                <input type="name" name="name" />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="text" name="phone"/>
                <br />
                <input type="submit" value={handleBtnSubmit} />
            </form>
        </div>
    );
};

export default ReusableForm;