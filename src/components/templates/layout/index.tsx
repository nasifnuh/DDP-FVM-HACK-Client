import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="w-full relative min-h-screen">
        <Header />
        <div className="children">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
