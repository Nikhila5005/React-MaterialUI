import React from 'react';
import './App.css';
import Registration from './components/Registration'
import Login from './components/login';
import ResetPassword from './components/ResetPassword';
// import ForgotPassword from './components/ForgotPassword'

function App() {
  return (
    <div className="App">
      <Registration></Registration>
       {/* <Login /> */}
       {/* <ForgotPassword></ForgotPassword>  */}
      {/* <ResetPassword></ResetPassword>  */}
      

    </div>
  );
}

export default App;
