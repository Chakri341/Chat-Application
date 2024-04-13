import { useEffect, useState } from "react";
import toast from 'react-hot-toast';

const useGetConvoList = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations]=useState([]);
  useEffect(() => {
    getConvonversation();
  }, []);

  const getConvonversation = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/users");
      const data=await res.json();
      if(data.errror){
        throw new Error(data.error);
      }
      setConversations(data);
    } catch (error) {
        toast.error(error.message);
    }finally{
        setLoading(false);
    }
  };
  return {loading, conversations};
};

export default useGetConvoList;