import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

import Layout from "../../templates/layout";
import TextField from "../../templates/textField";
import { navigate } from "../../../utils";

const Index = () => {
  const [openNameModal, setOpenNameModal] = useState(false);
  const [openCreatedModal, setOpenCreatedModal] = useState(false);
  const [name, setName] = useState("");
  return (
    <Layout>
      <div className="flex w-full flex-col items-center justify-center">
        <span className="mb-10 text-3xl font-medium">
          Welcome to DDP - Decentralized Development Protocol 👋
        </span>
        <div className="flex gap-10">
          <Button
            onClick={() => navigate("/explore")}
            label="Explore tasks..."
          />
          <Button
            onClick={() => setOpenNameModal(true)}
            label="Connect Wallet"
            className="p-button-help"
          />
        </div>
      </div>
      <Dialog
        header="You go as.."
        visible={openNameModal}
        draggable={false}
        style={{ width: "25vw" }}
        onHide={() => setOpenNameModal(false)}
      >
        <TextField
          title="Name"
          value={name}
          containerClassNames="w-full mb-5"
          onChangeHandler={(e) => setName(e.target.value)}
        />
        <Button
          label="Continue"
          className="p-button-info w-full"
          onClick={() => {
            setOpenNameModal(false);
            setOpenCreatedModal(true);
          }}
        />
      </Dialog>
      <Dialog
        header="Login"
        visible={openCreatedModal}
        draggable={false}
        style={{ width: "25vw" }}
        onHide={() => setOpenCreatedModal(false)}
      >
        <div className="mb-5 text-center">
          Account created successfully 👏👏
        </div>
        <Button
          label="Profile"
          className="p-button-info w-full"
          onClick={() => setOpenCreatedModal(false)}
        />
      </Dialog>
    </Layout>
  );
};

export default Index;
