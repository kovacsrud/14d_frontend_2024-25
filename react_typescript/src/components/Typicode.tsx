import {useState,useEffect} from 'react';

type Post={
    userId:number,
    id:number,
    title:string,
    body:string
}

function Typicode() {
    const[posts,setPosts]=useState(Array<Post>);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then(adat=>setPosts(adat))
        .catch(err=>alert(err));
    },[])

  return (
    <div>
        {
            posts.map((post)=>(<p key={post.id}>{post.id},{post.title}</p>))
        }
    </div>
  )
}

export default Typicode