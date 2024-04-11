import toast from 'react-hot-toast';
import conversation from '../zustand/conversation'
import { useEffect, useState } from 'react';

const useGetMsgs = () => {
    const [loading, setLoading]=useState(false);
    const {messages, setMessages, selectedConvo}=conversation();

    useEffect(()=>{
        getMessages();
    }, [selectedConvo?._id, setMessages]);

    const getMessages=async()=>{
        setLoading(true);
        try {
            const res=await fetch(`/api/messages/${selectedConvo._id}` ,{
                method:"GET",
            })
            const data=await res.json();
            if(data.error){
                throw new Error(data.error);
            }
            setMessages(data);

        } catch (error) {
            toast.error(error.messages)
        }finally{
            setLoading(false);
        }
    }
    return {loading, messages};
}

export default useGetMsgs;
