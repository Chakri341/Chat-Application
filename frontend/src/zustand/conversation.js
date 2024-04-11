import {create} from 'zustand';

const conversation=create((set)=>({
    selectedConvo:null,
    setSelectedConvo:(selectedConvo) => set({selectedConvo}),
    messages:[],
    setMessages:(messages) => set({messages}),
}))

export default conversation;