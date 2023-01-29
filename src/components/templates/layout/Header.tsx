import React from "react";
import { useUserData, navigate } from "../../../utils";

const Header = () => {
  const { userData } = useUserData();

  const signOut = () => {
    localStorage.clear();
    window.location.pathname = "/";
  };

  return (
    <nav className="fixed z-50 flex h-16 w-full items-center justify-between border border-gray-300 bg-gray-100 px-6 text-gray-700 shadow-md">
      <img
        src="/assets/react.svg"
        alt="Logo"
        className="mr-3 h-12 w-12 object-contain"
        onClick={() => navigate("/")}
      />
      {userData && (
        <div>
          <button
            onClick={() => navigate("/explore")}
            className="mx-3 cursor-pointer outline-none"
          >
            Explore
          </button>
          <button
            onClick={() => navigate("/board")}
            className="mx-3 cursor-pointer outline-none"
          >
            Task Board
          </button>
        </div>
      )}
      {userData && (
        <div>
          <button
            onClick={signOut}
            className="mx-3 cursor-pointer outline-none"
          >
            Profile
          </button>
          <button
            onClick={signOut}
            className="ml-3 cursor-pointer outline-none"
          >
            Sign Out
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
