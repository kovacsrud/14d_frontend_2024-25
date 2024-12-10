import { useState } from "react";
import {useNavigate} from "react-router-dom";


function Login() {
    const navigate=useNavigate();

    const kuldes=(formData,method)=>{
        fetch(`${import.meta.env.VITE_BASE_URL}/api/user/belepes`,{
            method:method,
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(formData)
        })
        .then(res=>res.json())
        .then(token=>{
            if(!token.message){
                sessionStorage.setItem('usertoken',token);
                alert("Sikeres belépés!");
                navigate('/');
            } else {
                alert(token.message);
            }
        })
        .catch(err=>alert(err));

    }

    const onSubmit=(e)=>{
        e.preventDefault();
        kuldes(formData,'POST');
    }

    let formObj={
        username:"",
        password:""
    }

    const[formData,setFormData]=useState(formObj);
    const writeData=(e)=>{
        setFormData((prevState)=>({...prevState,[e.target.id]:e.target.value}));
    }

  return (
    <div>
        <h1 className="text-3xl font-bold text-center my-10">Bejelentkezés</h1>
        <div>
            <form onSubmit={onSubmit} className="flex flex-col items-center justify-center">
            <input type="text" id="username" value={formData.username} onChange={writeData} placeholder="felhasználói név" className="my-5 input input-bordered w-full max-w-xs" />
            <input type="password" id="password" value={formData.password} onChange={writeData} placeholder="jelszó" className="my-5 input input-bordered w-full max-w-xs" />
            <button type="submit" className="my-5 btn btn-primary">Küldés</button>

            </form>
        </div>
    </div>
  )
}

export default Login