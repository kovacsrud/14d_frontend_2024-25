import {useState,useEffect} from 'react'

type Name={
    title:string,
    first:string,
    last:string
}

type Street={
    number:number,
    name:string
}

type Coordinates={
    latitude:string,
    longitude:string
}

type TimeZone={
    offset:string,
    description:string
}

type Location={
    street:Street,
    city:string,
    state:string,
    country:string,
    postcode:string,
    coordinates:Coordinates,
    timezone:TimeZone
}

type Login={
    uuid:string,
    username:string,
    password:string,
    salt:string,
    md5:string,
    sha1:string,
    sha256:string
}

type DateAge={
    date:string,
    age:number
}

type Id={
    name:string,
    value:string
}

type Picture={
    large:string,
    medium:string,
    thumbnail:string
}

type Result={
    gender:string,
    name:Name,
    location:Location,
    email:string,
    login:Login,
    dob:DateAge,
    registered:DateAge,
    phone:string,
    cell:string,
    id:Id,
    picture:Picture,
    nat:string
}


function RandomUser() {
    const[users,setUsers]=useState(Array<Result>);

    useEffect(()=>{
        fetch('https://randomuser.me/api/?results=5')
        .then(res=>res.json())
        .then(adat=>setUsers(adat.results))
        .catch(err=>alert(err));
    },[])
  return (
    <div>
        {
            users.map((user,i)=>(<p key={i}>{user.gender},{user.name.title} {user.name.first} {user.name.last}</p>))
        }
    </div>
  )
}

export default RandomUser