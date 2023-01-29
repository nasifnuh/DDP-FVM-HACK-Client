import React, { useState } from "react";
import { Button } from "primereact/button";

import Layout from "../../templates/layout";
import TextField from "../../templates/textField";

const Index = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [prize, setPrize] = useState("");
  const [deadline, setDeadline] = useState("");

  return (
    <Layout>
      <div className="w-full">
        <div className="mb-3 text-3xl font-medium">Create a new task</div>
        <div className="w-full rounded-lg bg-[#f3f4f6] p-6">
          <TextField
            containerClassNames="w-full mb-5"
            onChangeHandler={(e) => setName(e.target.value)}
            title="Task name"
            value={name}
          />
          <TextField
            containerClassNames="w-full mb-5"
            onChangeHandler={(e) => setDescription(e.target.value)}
            title="Task description"
            value={description}
          />
          <TextField
            containerClassNames="w-full mb-5"
            onChangeHandler={(e) => setPrize(e.target.value)}
            title="Prize"
            value={prize}
            type="number"
          />
          <TextField
            containerClassNames="w-full mb-5"
            onChangeHandler={(e) => setDeadline(e.target.value)}
            title="Deadline"
            value={deadline}
          />
          <Button
            className="p-button-info w-max"
            icon="pi pi-plus"
            label="Create"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
