import { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ViewUser() {

    const [user, setUser] = useState({
        email:"",
        username:"",
        name:"",
    })

    const {id} = useParams();

    useEffect(()=>{
        loadUser();
    },[]);

    const loadUser=async()=>{
        const result=await axios.get(`http://localhost:8080/user/${id}`);
        setUser(result.data);
    };

  return (
    <div className="container">
        <div className="flex justify-center py-20">
            <div className="w-1/3 flex-col justify-evenly px-4 py-5 bg-gradient-to-br from-purple-400 via-violet-600 to-fuchsia-700 shadow-purple-400 shadow-md">
                <p className="flex justify-center text-4xl py-4">User Details</p>
                <ul className="list-group list-group-flush px-2 border border-black">
                    <li className="list-group-item py-3 border-b border-black">
                        <b>Email: </b>
                        {user.email}
                    </li>
                    <li className="list-group-item py-3 border-b border-black">
                        <b>UserName: </b>
                        {user.username}
                    </li>
                    <li className="list-group-item py-3">
                        <b>Name: </b>
                        {user.name}
                    </li>
                </ul>
                <button type="submit" className="relative 
                w-full
                flex 
                justify-center 
                shadow-slate-800
                shadow-md
                border
                border-fuchsia-950
                bg-gradient-to-br
                from-orange-400
                via-yellow-200
                to-amber-500 
                px-4 
                py-2
                mt-3
                font-semibold
                text-fuchsia-950"
                >Back Home</button>
            </div>
        </div>
    </div>
  )
}
