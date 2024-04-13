import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import conversation from '../zustand/conversation';
import notification from '../assets/notification.mp3';

const useListenMsgs = () => {
  const {socket}= useSocketContext();
  const {messages, setMesssages}= conversation();

  useEffect(()=>{
    socket?.on("newMessage", (newMessage)=>{
      const sound= new Audio(notification);
      sound.play();
      setMesssages([...messages, newMessage]);
    })
    return () =>socket?.off("newMessage");
  }, [socket, setMesssages, messages])
};

export default useListenMsgs;

