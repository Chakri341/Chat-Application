import React, { useState } from "react";
import conversation from '../../zustand/conversation';
import useGetConversations from '../../hooks/useGetConvoList';
import toast from "react-hot-toast";

const SearchMsg = () => {
  const [search , setSearch]=useState('');
  const {setSelectedConvo}=conversation();
  const {loading, conversations}= useGetConversations();

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!search) return ;
    if(search.length<3){
      return toast.error('Search term must be atleast 3 characters long ');
    }
    const conversation=conversations.find((c)=>c.username?.toLowerCase().includes(search?.toLowerCase()))
    if(conversation){
      setSelectedConvo(conversation);
      setSearch("");
    }else toast.error("No such user found!")
  }

  
  return (
    <form className=" shadow-md rounded-lg  h-[10vh] content-center " onSubmit={handleSubmit}>
      <label className="input input-bordered flex items-center gap-2  border-black ">
        <input type="text" className="grow " placeholder="Search"  value={search} onChange={(e)=>{
          setSearch(e.target.value);
        }}/>
       { loading ? (<span className="loading loading-spinner"></span>):(<button type="submit" className="w-full h-full opacity-70 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
        </button>)}
      </label>
    </form>
  );
};

export default SearchMsg;
