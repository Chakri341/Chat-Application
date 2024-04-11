import React from "react";
import Chat from "./Chat";
import useGetConvoList from "../../hooks/useGetConvoList";

const ChatList = () => {
  const { loading, conversations } = useGetConvoList();
  if(!conversations) return ;
  
  return (
    <div className="h-full content-center overflow-y-scroll flex flex-col shadow-lg">
      {conversations.map((convo) => {
       return  <Chat key={convo._id} conversations={convo}/>;
      })}
    </div>
  );
};

export default ChatList;
