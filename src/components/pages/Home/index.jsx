import React from "react";

import Layout from "../../templates/layout";

import { Button } from "primereact/button";

const Index = () => {
  return (
    <Layout>
      <div className="flex w-full flex-col items-center justify-center">
        <div className="mb-10 text-3xl font-medium">
          Welcome to DDP - Decentralized Development Protocol 👋
        </div>
        <Button label="Explore tasks..." />
      </div>
    </Layout>
  );
};

export default Index;
