import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import {fetchUsers} from '../reducers/userSlice';

function Users() {

    const dispatch=useDispatch();
    const {userList,loading,error}=useSelector((state)=>state.users);

    useEffect(()=>{
        dispatch(fetchUsers())
    },[dispatch])

  return (
    <div>
        <h1 className="text-2xl font-bold text-center text-blue-800">Felhasználók</h1>
        {loading && <p className="font-bold text-center">Betöltés...</p>}    
        {error && <p className="font-bold text-center text-red-500">{error}</p>}

        <ul>
            {userList.map((user)=>(<li key={user.id}>{user.name} - {user.email}</li>))}
        </ul>

    </div>
  )
}

export default Users