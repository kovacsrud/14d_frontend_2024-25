import { useState,useEffect } from "react";
import Ruser from "./Ruser";

function Rusers() {
    const [users,setUsers]=useState([]);

    useEffect(()=>{
        fetch('https://randomuser.me/api/?results=50')
        .then(res=>res.json())
        .then(users=>setUsers(users.results))
        .catch(err=>console.log(err));
    },[])

  return (
    <div>
        {
            users.map((user,i)=>(<p key={i}>{user.name.title} {user.name.first} {user.name.last}</p>))
        }
    </div>
  )
}

export default Rusers