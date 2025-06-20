import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {

    const[users,setUsers]=useState([]);
    
    useEffect(()=>{
        loadUsers();
    },[]);

    const loadUsers=async()=>{
        const result=await axios.get("http://localhost:8080/users");
        setUsers(result.data);
    };

    const deleteUser=async (id)=> {
        await axios.delete(`http://localhost:8080/user/${id}`)
        loadUsers()
    }

  return (
    <div className="container">
        <div className="py-20 flex justify-center">
            <table className="table-auto bg-purple-50 text-slate-50 w-3/4 border rounded-md overflow-hidden border-gray-700 shadow-md">
                <thead className="bg-purple-500 text-white">
                    <tr>
                        <th className="border border-gray-700 px-4 py-2"> ID </th>
                        <th className="border border-gray-700 px-4 py-2"> Name </th>
                        <th className="border border-gray-700 px-4 py-2"> UserName </th>
                        <th className="border border-gray-700 px-4 py-2"> Email </th>
                        <th className="border border-gray-700 px-4 py-2"> Action </th>
                    </tr>
                </thead>
                <tbody className="text-red-900 font-bold">
                    {
                        users.map((user, index)=>(
                            <tr key={index} className="border border-gray-700">
                                <th scope="row" className="border border-gray-700">{index+1}</th>
                                <td className="border border-gray-700 px-4 py-3"> {user.name} </td>
                                <td className="border border-gray-700 px-4 py-3"> {user.username} </td>
                                <td className="border border-gray-700 px-4 py-3"> {user.email} </td>
                                <td className="flex justify-evenly items-center text-slate-50 py-2">
                                    <Link className="bg-fuchsia-600 font-bold py-2 px-2 rounded"
                                    to={`/viewUser/${user.id}`}>View</Link>
                                    <Link
                                    className="bg-slate-50 border border-purple-800 text-purple-800 font-bold py-2 px-2 rounded" 
                                    to={`/editUser/${user.id}`}>Edit</Link>
                                    <button 
                                    className="bg-red-500 font-bold py-2 px-2 rounded"
                                    onClick={()=>deleteUser(user.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}
