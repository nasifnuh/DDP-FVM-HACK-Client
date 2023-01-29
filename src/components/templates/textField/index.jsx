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
      {title && (
        <div className={`mb-1 flex-shrink-0 text-sm font-medium`}>{title}</div>
      )}
      <div className="relative w-full">
        {!textArea ? (
          <InputText
            type={type}
            value={value}
            onChange={onChangeHandler}
            className="h-full w-full"
          />
        ) : (
          <InputTextarea
            rows={5}
            cols={30}
            value={value}
            onChange={onChangeHandler}
            autoResize
            className="h-full w-full"
          />
        )}
      </div>
    </div>
  );
};

export default Index;
