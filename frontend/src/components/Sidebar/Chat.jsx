import React from "react";
import conversation from "../../zustand/conversation";
import {useSocketContext} from '../../context/SocketContext';


const Chat = ({conversations}) => {
const   { profilePic, username, _id } =conversations;
const {selectedConvo, setSelectedConvo}=conversation();
const isSelelcted =selectedConvo?._id === _id ;
const {onlineUsers}=useSocketContext();
const isOnline=onlineUsers.includes(conversations._id)
 
return (
    <div className={`flex gap-2 items-center hover:bg-sky-100 rounded p-2 py-1 cursor-pointer  ${isSelelcted?'bg-sky-400':""}`} onClick={()=>{
      setSelectedConvo(conversations);
    }}>
      <div className={`avatar ${isOnline? "online": "offline"}`}>
        <div className="w-12 rounded-full">
          <img src={profilePic} />
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <p>{username} </p>
      </div>
    </div>
  );
};

export default Chat;
