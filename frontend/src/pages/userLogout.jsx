import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const UserLogout =  () => {
  const token = localStorage.getItem("userToken");
  const navigate=useNavigate();
   axios.get("http://localhost:4000/users/logout", {
    headers: {
      Authorization: `bearer ${token}`,
    },
  }).then((res)=>{
    if(res.status==200){
        localStorage.removeItem('userToken')
        navigate('/login')
    }
  });

  return(
    <div>
        User Logout
    </div>
  )
};
export default UserLogout;
