
import './App.css'
import Grandpa from './components/Grandpa/Grandpa';

import ReusableForm from './components/ReusableForm/ReusableForm'




function App() {
  const handleSignUpSubmit = data => {
    console.log('signup',data);
}
const handleUpdateProfile = data =>{
  console.log('update',data);
}
  return (
    <>
      <h1>Vite + React</h1>
     <ReusableForm formTitle={'Sign Up'}
     handleSubmit={handleSignUpSubmit}
     >
      <div>SIng Up</div>
     </ReusableForm>
     <ReusableForm formTitle={'Update Profile'} handleBtnSubmit='update'
     handleSubmit={handleUpdateProfile}>
      <div>Update Profile</div>
     </ReusableForm>
     <Grandpa></Grandpa>
      
    </>
  )
}

export default App
