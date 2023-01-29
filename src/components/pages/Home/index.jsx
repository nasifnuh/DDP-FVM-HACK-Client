import React from "react";
import { Button } from "primereact/button";

import Layout from "../../templates/layout";
import { navigate } from "../../../utils";

const Index = () => {
  return (
    <Layout>
      <div className="flex w-full flex-col items-center justify-center">
        <div className="mb-10 text-3xl font-medium">
          Welcome to DDP - Decentralized Development Protocol 👋
        </div>
        <div className="flex gap-10">
          <Button
            onClick={() => navigate("/explore")}
            label="Explore tasks..."
          />
          <Button label="Connect Wallet" className="p-button-help" />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
