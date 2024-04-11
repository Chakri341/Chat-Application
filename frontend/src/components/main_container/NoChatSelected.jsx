import React from 'react'
const NoChatSelected = () => {
	const data=localStorage.getItem('chat-user');
	const res= JSON.parse(data);
	  return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-500 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 {res.username} ❄</p>
				<p>Select a chat to start messaging</p>
			</div>
		</div>
	);
}

export default NoChatSelected;


