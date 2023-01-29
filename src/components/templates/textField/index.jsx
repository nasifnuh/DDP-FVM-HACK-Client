import React from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";

const Index = ({
  title,
  type = "text",
  value,
  textArea = false,
  containerClassNames = "",
  onChangeHandler,
}) => {
  return (
    <div className={`flex flex-col items-start ${containerClassNames}`}>
      <div className={`font-medium text-sm flex-shrink-0 mb-1`}>{title}</div>
      <div className="relative w-full">
        {!textArea ? (
          <InputText
            type={type}
            value={value}
            onChange={onChangeHandler}
            className="w-full h-full"
          />
        ) : (
          <InputTextarea
            rows={5}
            cols={30}
            value={value}
            onChange={onChangeHandler}
            autoResize
            className="w-full h-full"
          />
        )}
      </div>
    </div>
  );
};

export default Index;
