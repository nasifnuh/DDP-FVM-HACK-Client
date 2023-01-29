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
        header="Task Name"
        visible={modalOpen}
        draggable={false}
        style={{ width: "900px" }}
        onHide={openModalHandler}
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
            label="Join as developer"
            className="p-button-info"
            onClick={() => setOpenStakeModal(true)}
          />
          <Button
            label="Join as tester"
            className="p-button-info"
            onClick={() => setOpenStakeModal(true)}
          />
          <Button
            label="Join as reviewer"
            className="p-button-info"
            onClick={() => setOpenStakeModal(true)}
          />
        </div>
        <Activity />
      </Dialog>

      <Dialog
        header="Confirmation"
        visible={openStakeModal}
        draggable={false}
        style={{ width: "25vw" }}
        onHide={() => setOpenStakeModal(false)}
      >
        <TextField
          title="Amount"
          value={stakeValue}
          containerClassNames="w-full mb-5"
          onChangeHandler={(e) => setStakeValue(e.target.value)}
        />
        <Button
          label="Stake"
          className="p-button-info w-full"
          onClick={() => setOpenStakeErrorModal(true)}
        />
      </Dialog>
      <Dialog
        header="Error"
        visible={openStakeErrorModal}
        draggable={false}
        style={{ width: "25vw" }}
        onHide={() => setOpenStakeErrorModal(false)}
      >
        <div className="mb-5 text-center">Oh no, Stake failed 😞</div>
        <Button
          label="Back"
          className="p-button-info w-full"
          onClick={() => setOpenStakeErrorModal(false)}
        />
      </Dialog>
    </>
  );
};

export default Index;
