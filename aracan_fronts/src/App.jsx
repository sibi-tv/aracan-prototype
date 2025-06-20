import Navbar from './layout/Navbar'
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';
import Landing from './pages/Landing';
import Cart from './pages/Cart';
import Sauce from './pages/Sauce';
// import './App.css';

function App() {
  return (
    <div style={{ backgroundColor: '#ddd6a8' }} className="min-h-screen"> 
      <div className="content">
        <Router>
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<Landing/>}/>
            <Route exact path="/users" element={<Home/>}/>
            <Route exact path="/sauce" element={<Sauce/>}/>
            <Route exact path="/adduser" element={<AddUser/>}/>
            <Route exact path="/cart" element={<Cart/>}/>
            <Route exact path="/viewuser/:id" element={<ViewUser/>}/>
            <Route exact path="/edituser/:id" element={<EditUser/>}/>
          </Routes>
        </Router>
      </div>
    </div>   
  )
}

export default App;
