import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="w-full mx-auto pt-2 pb-2 flex justify-center bg-purple-950 text-slate-50 items-center">
        <div className="w-1/4 flex items-center">
          <Link className="ml-8 border
              border-fuchsia-950
              bg-yellow-50 text-fuchsia-950 font-bold font-playfair py-2 px-2 rounded-full shadow-fuchsia-500" to="/sauce">Sauce Catalog</Link>
          <Link className="ml-5 border
              border-fuchsia-950
              bg-yellow-50 text-fuchsia-950 font-bold font-playfair py-2 px-2 rounded-full shadow-fuchsia-500" to="/adduser">Join Araçan</Link>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <Link style={{ color: '#f7efe5' }} className="font-macherie text-6xl" to="/">Araçan</Link>
        </div>
        
        <div className="w-1/4">
          <div className="w-3/4 flex justify-evenly">
            <Link className="ml-5 border
              text-yellow-50 
              font-bold font-playfair py-2 
              px-2 rounded-full shadow-fuchsia-500" to="/cart">About</Link>
            <Link className="ml-5 border
              text-yellow-50 
              font-bold font-playfair py-2 
              px-2 rounded-full shadow-fuchsia-500" to="/cart">Contact</Link>
            <Link className="ml-5 border
              text-yellow-50 
              font-bold font-playfair py-2 
              px-2 rounded-full shadow-fuchsia-500" to="/cart">Terms</Link>
            <Link className="ml-5 border
              text-yellow-50 
              font-bold font-playfair py-2 
              px-2 rounded-full shadow-fuchsia-500" to="/cart">Cart</Link>
          </div>
        </div>







      </nav>
      <>
      </>
    </>
    
  )
  
}
