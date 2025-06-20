import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {

  let navigate=useNavigate();

  const {id} = useParams()

  const [user, setUser] = useState({
    email:"",
    username:"",
    name:"",
  })

  const{email, username, name} = user

  const onInputChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
  };

  useEffect(()=>{
    loadUser();
  })

  const onSubmit=async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/user/${id}`, user);
    navigate("/")
  }

  const loadUser = async () => {
    const result=await axios.get(`http://localhost:8080/user/${id}`)
    setUser(result.data)
  }

  return (
    <div className="container flex justify-center py-20">
        <h1 className="text-slate-50">Edit User</h1>
        <form className="w-1/3 flex-col justify-evenly px-4 bg-gradient-to-br from-purple-400 via-violet-600 to-fuchsia-700 shadow-purple-400 shadow-md" onSubmit={(e)=>onSubmit(e)}>
          <div className="py-3">
            <label className="block mb-2 text-lg text-cyan-950 font-medium">Email</label>
            <input name="email" className="w-full px-2" placeholder="E-mail Address" required value={email} onChange={(e)=>onInputChange(e)}/>
          </div>
          <div className="mb-3">
            <label className="block mb-2 text-lg text-cyan-950 font-medium">Username</label>
            <input name="username" className="w-full px-2" placeholder="Username" required value={username} onChange={(e)=>onInputChange(e)}/>
          </div>
          <div className="mb-3">
            <label className="block mb-2 text-lg text-cyan-950 font-medium">Password</label>
            <input name="name" className="w-full px-2" placeholder="Name" required value={name} onChange={(e)=>onInputChange(e)}/>
          </div>
          <div className="py-3 flex justify-left">
            <button type="submit" className="relative 
              flex 
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
              font-semibold
              text-fuchsia-950"
            >Update</button>
            <Link className="
              ml-4
              relative 
              flex 
              shadow-slate-800
              shadow-md
              border
              border-fuchsia-950
              bg-gradient-to-br
              from-red-400
              via-red-800
              to-pink-600 
              px-4 
              py-2
              font-semibold
              text-fuchsia-300" to="/"
            >Cancel</Link>
          </div>
        </form>
    </div>
  )
}
