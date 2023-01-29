import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

import Card from "../../pages/Explore/Card";
import Layout from "../../templates/layout";
import TextField from "../../templates/textField";
import { useUserData } from "../../../utils";

const Index = () => {
  const { userData } = useUserData();

  const [openNameModal, setOpenNameModal] = useState(false);
  const [openCreatedModal, setOpenCreatedModal] = useState(false);
  const [name, setName] = useState("");
  return (
    <Layout>
      <div className="m-auto w-full lg:w-3/5 xl:w-1/2 ">
        <div className="mt-10 mb-14 flex items-center justify-between">
          <span className="text-3xl font-medium">Open Tasks</span>
          {!userData && (
            <Button
              onClick={() => setOpenNameModal(true)}
              label="Connect Wallet"
              className="p-button-help"
            />
          )}
        </div>
        <div className="flex flex-col gap-5">
          <Card />
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
