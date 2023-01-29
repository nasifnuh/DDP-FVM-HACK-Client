import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

import Card from "../../pages/Explore/Card";
import Layout from "../../templates/layout";
import TextField from "../../templates/textField";
import { navigate, useUserData } from "../../../utils";

const Index = () => {
  const { userData } = useUserData();

  const [openNameModal, setOpenNameModal] = useState(false);
  const [openCreatedModal, setOpenCreatedModal] = useState(false);
  const [name, setName] = useState("");
  return (
    <Layout>
      <div className="m-auto w-full">
        <div className="mb-3 flex items-center justify-between">
          <div className="text-3xl font-medium">Open Tasks</div>
          {!userData && (
            <Button
              className="p-button-help"
              label="Connect Wallet"
              onClick={() => setOpenNameModal(true)}
            />
          )}
        </div>
        <div className="flex flex-col gap-5">
          <Card />
          <Card />
        </div>
      </div>
      <Dialog
        draggable={false}
        header="You go as.."
        onHide={() => setOpenNameModal(false)}
        style={{ width: "25vw" }}
        visible={openNameModal}
      >
        <TextField
          containerClassNames="w-full mb-5"
          onChangeHandler={(e) => setName(e.target.value)}
          title="Name"
          value={name}
        />
        <Button
          className="p-button-info w-full"
          label="Continue"
          onClick={() => {
            setOpenCreatedModal(true);
            setOpenNameModal(false);
          }}
        />
      </Dialog>
      <Dialog
        draggable={false}
        header="Login"
        onHide={() => setOpenCreatedModal(false)}
        style={{ width: "25vw" }}
        visible={openCreatedModal}
      >
        <div className="mb-5 text-center">
          Account created successfully 👏👏
        </div>
        <Button
          className="p-button-info w-full"
          label="Profile"
          onClick={() => navigate("/profile")}
        />
      </Dialog>
    </Layout>
  );
};

export default Index;
