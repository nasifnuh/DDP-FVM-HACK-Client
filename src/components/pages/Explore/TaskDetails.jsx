import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

import Activity from "./Activity";
import TextField from "../../templates/textField";

const Index = ({ modalOpen, openModalHandler }) => {
  const [openStakeModal, setOpenStakeModal] = useState(false);
  const [openStakeErrorModal, setOpenStakeErrorModal] = useState(false);
  const [stakeValue, setStakeValue] = useState();

  return (
    <>
      <Dialog
        draggable={false}
        header="Task Name"
        onHide={openModalHandler}
        style={{ width: "900px" }}
        visible={modalOpen}
      >
        <div className="mb-5">
          <p>Task description</p>
          <div className="mt-5">
            <p>
              <strong>Prize: </strong>$200
            </p>
            <p>
              <strong>Deadline: </strong>March 6th
            </p>
          </div>
        </div>
        <div className="flex gap-5">
          <Button
            className="p-button-info"
            label="Join as developer"
            onClick={() => setOpenStakeModal(true)}
          />
          <Button
            className="p-button-info"
            label="Join as tester"
            onClick={() => setOpenStakeModal(true)}
          />
          <Button
            className="p-button-info"
            label="Join as reviewer"
            onClick={() => setOpenStakeModal(true)}
          />
        </div>
        <Activity />
      </Dialog>

      <Dialog
        draggable={false}
        header="Confirmation"
        onHide={() => setOpenStakeModal(false)}
        style={{ width: "25vw" }}
        visible={openStakeModal}
      >
        <TextField
          containerClassNames="w-full mb-5"
          onChangeHandler={(e) => setStakeValue(e.target.value)}
          title="Amount"
          value={stakeValue}
        />
        <Button
          className="p-button-info w-full"
          label="Stake"
          onClick={() => setOpenStakeErrorModal(true)}
        />
      </Dialog>
      <Dialog
        draggable={false}
        header="Error"
        onHide={() => setOpenStakeErrorModal(false)}
        style={{ width: "25vw" }}
        visible={openStakeErrorModal}
      >
        <div className="mb-5 text-center">Oh no, Stake failed 😞</div>
        <Button
          className="p-button-info w-full"
          label="Back"
          onClick={() => setOpenStakeErrorModal(false)}
        />
      </Dialog>
    </>
  );
};

export default Index;
