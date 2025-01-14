import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const CaptainLogout =  () => {
  const token = localStorage.getItem("captainToken");
  const navigate=useNavigate();
   axios.get("http://localhost:4000/captain/logout", {
    headers: {
      Authorization: `bearer ${token}`,
    },
  }).then((res)=>{
    if(res.status==200){
        localStorage.removeItem('captainToken')
        navigate('/')
    }
  });

  return(
    <div>
        User Logout
    </div>
  )
};
export default CaptainLogout;
