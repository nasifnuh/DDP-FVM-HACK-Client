import React from "react";
import Navigation from "./Navigation";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="relative flex min-h-screen w-full gap-5">
        <div className="w-1/4">
          <Navigation />
        </div>
        <div className="children w-full">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
