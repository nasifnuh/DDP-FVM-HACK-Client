import React from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

import Activity from "./Activity";

const Index = ({ task, modalOpen, openModalHandler }) => {
  return (
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
      <Button
        label="I'm interested"
        className="p-button-info"
        onClick={openModalHandler}
      />
      <Activity />
    </Dialog>
  );
};

export default Index;
