import React from "react";
import { Card } from "primereact/card";

const Index = () => {
  return (
    <div className="mt-5">
      <span className="font-medium">Activity</span>
      {/* Start loop */}
      <div className="mt-3 flex flex-col gap-3">
        <div className="rounded bg-[#f3f4f6] px-4 py-3">
          <span className="text-base font-medium">Username</span>&nbsp;
          <span className="text-xs">{"2 days ago"}</span>
          <p className="text-sm">Activity details</p>
        </div>
      </div>
      {/* End loop */}
    </div>
  );
};

export default Index;
