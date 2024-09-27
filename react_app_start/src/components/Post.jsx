import { useState } from "react";

function Post({post}) {
    const [isOpen,setIsOpen]=useState(false);

  return (
    <div>
        {
            isOpen ?
             <>
                <p className="text-center">{post.id}</p>
                <p className="text-center">{post.userId}</p>
                <p className="text-center">{post.title}</p>
                <p className="p-10 text-center">{post.body}</p>
                <button className="btn btn-primary" onClick={()=>setIsOpen(prev=>!prev)}>Részletek ki</button>
             </>
             :
             <>
                <p>{post.title}</p>
                <button className="btn btn-primary" onClick={()=>setIsOpen(prev=>!prev)}>Részletek be</button>
             </>
        }
    </div>
  )
}

export default Post