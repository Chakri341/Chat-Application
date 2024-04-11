import React from "react";
import SearchMsg from "./SearchMsg";
import ChatList from "./ChatList";
import LogoutBtn from "./LogoutBtn";
const Sidebar = () => {
  return (
    <div className="w-1/4 m-2 h-[80vh] p-2">
      <SearchMsg />
      <ChatList />
      <LogoutBtn />
    </div>
  );
};

export default Sidebar;
