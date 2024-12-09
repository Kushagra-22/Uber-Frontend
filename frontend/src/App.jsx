import React  from "react";
import {Routes,Route} from 'react-router-dom';
import Home from "./pages/home";
import UserLogin from "./pages/userLogin"
import UserRegister from "./pages/userRegister"

const App=()=>{
  return (
    <div>
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/login' element= {<UserLogin/>} />
        <Route path='/signup' element= {<UserRegister/>} />

  
      </Routes>
    </div>
  )
}

export default App;