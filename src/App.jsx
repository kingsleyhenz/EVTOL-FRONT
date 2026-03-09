import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

// Public Pages
import Home from './pages/public/Home';
import About from './pages/public/About';
import Features from './pages/public/Features';
import Contact from './pages/public/Contact';

// Auth Pages
import Login from './pages/auth/Login';
import SignUp from "./pages/auth/Signup";

// User Pages
import UserDashboard from './pages/user/Dashboard';
import AddRequest from "./pages/user/AddRequest";
import MyRequests from "./pages/user/MyRequests";

// Admin Pages
import AdminDashboard from './pages/admin/Dashboard';
import Requests from './pages/admin/Requests';
import EvtolList from './pages/admin/EvtolList';
import EvtolLoad from './pages/admin/EvtolLoad';
import Available from './pages/admin/Available';

function App() {
  return (
    <>
    <ToastContainer />
    <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Auth Routes */}
        <Route path="/register-account" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        
        {/* User Dashboard Routes */}
        <Route path="/user-dash" element={<UserDashboard />} />
        <Route path="/add-req" element={<AddRequest />} />
        <Route path="/my-requests" element={<MyRequests/>}/>

        {/* Admin Dashboard Routes */}
        <Route path="/Overview" element={<AdminDashboard />} />
        <Route path="/all" element={<EvtolList />} />
        <Route path="/load" element={<EvtolLoad/>}/>
        <Route path="/requests" element={<Requests/>}/>
        <Route path="/viewAvailable" element={<Available />} />
    </Routes>
    </>
  );
}

export default App;
