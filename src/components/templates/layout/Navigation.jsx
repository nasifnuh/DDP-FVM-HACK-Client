import React from "react";
import { useUserData, navigate } from "../../../utils";

const Navigation = () => {
  const { userData } = useUserData();

  const signOut = () => {
    localStorage.clear();
    window.location.pathname = "/";
  };

  return (
    <nav
      className={`fixed z-50 flex h-screen w-40 flex-col items-start ${
        userData ? `justify-between` : `justify-center`
      } border border-gray-300 bg-gray-100 p-5 text-gray-700 shadow-md lg:w-44 xl:w-60`}
    >
      <div className="flex w-full flex-col items-start gap-2">
        <img
          alt="Logo"
          className="mx-auto mb-10 h-12 w-12 object-contain"
          onClick={() => navigate("/")}
          src="/assets/react.svg"
        />
        {userData && (
          <button
            className="cursor-pointer outline-none"
            onClick={() => navigate("/")}
          >
            Explore
          </button>
        )}
        {userData && (
          <button
            className="cursor-pointer outline-none"
            onClick={() => navigate("/board")}
          >
            Task Board
          </button>
        )}
        {userData && (
          <button
            className="cursor-pointer outline-none"
            onClick={() => navigate("/create-task")}
          >
            Create Task
          </button>
        )}
      </div>
      <div className="flex w-full flex-col items-start gap-2">
        {userData && (
          <button
            className="cursor-pointer outline-none"
            onClick={() => navigate("/profile")}
          >
            Profile
          </button>
        )}
        {userData && (
          <button className="cursor-pointer outline-none" onClick={signOut}>
            Sign Out
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
