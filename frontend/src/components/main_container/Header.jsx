import React from "react";
import conversation from "../../zustand/conversation";

const Header = () => {
  const {selectedConvo}=conversation();
  return (
    <div className="h-[10vh] rounded-lg content-center">
      <div className="navbar  bg-sky-400 text-primary-content rounded-lg">
        <h3 className="text-black text-lg font-semibold">Send to : {selectedConvo?.username} </h3>
      </div>
    </div>
  );
};

export default Header;
