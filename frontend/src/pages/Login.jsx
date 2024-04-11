import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const [inputs, setInputs]=useState({
    username:'',
    password:'',
  })

  const {loading, login}=useLogin();

  const handleSubmit=async(e)=>{
    e.preventDefault();
    await login(inputs);
  }


  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto w-full my-12 sm:w-1/3">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-100 bg-clip-padding ">
        <h1 className="text-3xl font-semibold text-center text-black">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10 p-2 rounded-lg"
              value={inputs.username}
              onChange={(e)=>{
                setInputs({...inputs, username:e.target.value});
              }}
            />
          </div>
          <div className="mb-3">
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10 p-2 rounded-lg"
              value={inputs.password}
              onChange={(e)=>{
                setInputs({...inputs, password:e.target.value});
              }}
            />
          </div>
          <Link
            to="/signup"
            className="text-sm  hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </Link>

          <div className="mt-3">
            <button className="btn  w-full btn-sm mt-2 border bg-blue-500 border-slate-700 p-2 rounded-lg"disabled={loading} >
              {loading ? <span className="loading loading-spinner"></span>:"Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
