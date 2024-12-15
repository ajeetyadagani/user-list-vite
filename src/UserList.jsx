import React,{useEffect,useState} from 'react'
import axios from "axios";

const UserList=()=> {
    const [users,setUsers] =useState([]);
    const [loading,setLoading] =useState([]);
    const [error,setError] =useState([]);

    useEffect(()=>{
        axios
             .get("https://jsonplaceholder.typecode.com/users")
             .then((response)=>{
                setUsers(response.data);
                setLoading(false);
             })
             .catch((err)=>{
                setError("failed to fetch users");
                setLoading(false);
             });

    },[]);
    if (loading){
        return <p>Loading...</p>
    }
    if(error){
        return <p>{error}</p>
    }
    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.map((user)=>(
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
    
  
};

export default UserList;
