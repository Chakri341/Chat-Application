import React, { useEffect, useRef } from "react";
import Msg from "./Msg";
import useGetMsgs from "../../hooks/useGetMsgs";
import MessageSkeleton from '../../components/skeletons/MessageSkeleton';
import useListenMsgs from "../../hooks/useListenMsgs";
 
const MsgContainer = () => {

  const {loading, messages}=useGetMsgs();

  useListenMsgs()
  const lastMessageRef = useRef();
  
  useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);


  return (
    <div className="h-full content-center overflow-y-scroll flex flex-col  overflow-hidden">
      {!loading &&
				messages.length > 0 &&
				messages.map((message) => (
					<div key={message._id} ref={lastMessageRef}>
						<Msg message={message} />
					</div>
				))}

			{loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
			{!loading && messages.length === 0 && (
				<p className='text-center'>Send a message to start the conversation</p>
			)}
    </div>
  );
};

export default MsgContainer;
