import { useState,useEffect } from "react";
import Post from "./Post";

function Posts() {
    const [posts,setPosts]=useState([]);

    const letolt=async ()=>{
        try {
            const request=await fetch("https://jsonplaceholder.typicode.com/posts");
            const response=await request.json();
            setPosts(response);
            
        } catch (error) {
            console.log(error);
        }
        
    }

    useEffect(()=>{
        //fetch("https://jsonplaceholder.typicode.com/posts")
        //.then(res=>res.json())
        //.then(posts=>setPosts(posts))
        //.catch(err=>console.log(err));
        letolt();
    },[]);

  return (
    <div>
        <h1>Posztok:</h1>     
        <p>Posztok száma:{posts.length}</p>  
        <div className="d-flex flex-row flex-wrap">
        {
            posts.map((post)=>(<Post key={post.id} post={post} />))
        }
        </div>
    </div>
  )
}

export default Posts