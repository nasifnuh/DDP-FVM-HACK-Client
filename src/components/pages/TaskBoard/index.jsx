import React from "react";

import Board from "./Board";
import Layout from "../../templates/layout";

const Index = () => {
  return (
    <Layout>
      <div className="w-full">
        <div className="my-3 text-3xl font-medium">My Task Board</div>
        <Board />
      </div>
    </Layout>
  );
};

export default Index;
