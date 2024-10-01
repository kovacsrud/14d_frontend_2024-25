import { useState,useEffect } from "react";
import Ruser from "./Ruser";
import UserSelect from "./UserSelect";

function Rusers() {
    const [users,setUsers]=useState([]);
    const [userNum,setUserNum]=useState(5);

    useEffect(()=>{
        fetch(`https://randomuser.me/api/?results=${userNum}`)
        .then(res=>res.json())
        .then(users=>setUsers(users.results))
        .catch(err=>console.log(err));
    },[userNum])

  return (
    <div>
        <UserSelect setUserNum={setUserNum}/>
        {
            users.map((user,i)=>(<Ruser key={i} user={user} />))
        }
    </div>
  )
}

export default Rusers