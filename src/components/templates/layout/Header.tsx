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
        alt="Logo"
        className="mr-3 h-12 w-12 object-contain"
        onClick={() => navigate("/")}
        src="/assets/react.svg"
      />
      {userData && (
        <div>
          <button
            className="mx-3 cursor-pointer outline-none"
            onClick={() => navigate("/explore")}
          >
            Explore
          </button>
          <button
            className="mx-3 cursor-pointer outline-none"
            onClick={() => navigate("/board")}
          >
            Task Board
          </button>
        </div>
      )}
      {userData && (
        <div>
          <button
            className="mx-3 cursor-pointer outline-none"
            onClick={() => navigate("/profile")}
          >
            Profile
          </button>
          <button
            className="ml-3 cursor-pointer outline-none"
            onClick={signOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
