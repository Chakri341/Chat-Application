import React, { useEffect } from "react";
import Header from "./Header.jsx";
import MsgContainer from "./MsgContainer.jsx";
import SendMsg from "./SendMsg.jsx";
import NoChatSelected from "./NoChatSelected.jsx";
import conversation from "../../zustand/conversation.js";

const MainContainer = () => {
  const { selectedConvo , setSelectedConvo} = conversation();
  useEffect(()=>{
    
    return ()=>setSelectedConvo(null);
  }, [setSelectedConvo]);

  return (
    <div className="w-3/4  m-2 h-[80vh] p-2 ">
      {!selectedConvo ? (
        <NoChatSelected />
      ) : (
        <>
          <Header />
          <MsgContainer />
          <SendMsg />
        </>
      )}
    </div>
  );
};

export default MainContainer;
