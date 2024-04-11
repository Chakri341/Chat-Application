import GenderCheckbox from "../components/GenderCheckbox";
import { Link } from "react-router-dom";
import { useState } from "react";
import useSignup from "../hooks/useSignup";

const SignUp = () => {

  const [inputs, setInputs]=useState({
    fullname:'',
    username:'',
    password:'',
    confirmPassword:'',
    gender:'',
    profilePic:'',
  });

  const {loading, signUp}=useSignup();

  const handleCheckBox=(gender)=>{
    setInputs({...inputs, gender});
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    await signUp(inputs);
  }

  return (
    <div className="flex flex-col items-center justify-center sm:w-1/3 w-full mx-auto mt-9 ">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-100 ">
        <h1 className="text-3xl font-semibold text-center text-black">
          Sign Up
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="label p-2">
              <span className="text-base label-text p-1">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full input input-bordered  h-10 p-2 rounded-lg"
              value={inputs.fullname}
              onChange={(e)=>{
                setInputs({...inputs, fullname:e.target.value})
              }}
            />
          </div>

          <div className="mb-3">
            <label className="label p-2 ">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="johndoe"
              className="w-full  input input-bordered h-10 p-2 rounded-lg"
              value={inputs.username}
              onChange={(e)=>{
                setInputs({...inputs, username:e.target.value})
              }}
            />
          </div>

          <div className="mb-3">
            <label className="label">
              <span className="text-base label-text ">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10 p-2 rounded-lg"
              value={inputs.password}
              onChange={(e)=>{
                setInputs({...inputs, password:e.target.value})
              }}
            />
          </div>

          <div className="mb-3">
            <label className="label">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10 p-2 rounded-lg"
              value={inputs.confirmPassword}
              onChange={(e)=>{
                setInputs({...inputs, confirmPassword:e.target.value})
              }}
            />
          </div>
          <Link
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
            to="/login"
          >
            Already have an account?
          </Link>
          <GenderCheckbox onCheckBoxChange={handleCheckBox} selectGender={inputs.gender} />
          <div className="mt-3">
            <button className="btn  w-full btn-sm mt-2 border bg-blue-500 border-slate-700 p-2 rounded-lg " disabled={loading} >
              {loading ? <span className="loading loading-spinner"></span>:"Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
