import Home from "./components/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import {Toaster} from 'react-hot-toast';
import { useAuthContext } from "./context/AuthContext";

function App() {
  const {authUser}=useAuthContext();
  return (
    <>
      <Routes>
        <Route path="/" element={authUser? <Home /> : <Navigate to='/signup'/>} />
        <Route path="/login" element={authUser ? <Navigate to='/'/>: <Login />} />
        <Route path="/signup" element={authUser ? <Navigate to='/'/>: <Signup />} />
      </Routes>
      <Toaster/>
    </>
  );
}

export default App;
