import React from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";

const Index = ({
  containerClassNames = "",
  disabled = false,
  onChangeHandler,
  textArea = false,
  title,
  type = "text",
  value,
}) => {
  return (
    <div className={`flex flex-col items-start ${containerClassNames}`}>
      {title && (
        <div className={`mb-1 flex-shrink-0 text-sm font-medium`}>{title}</div>
      )}
      <div className="relative w-full">
        {!textArea ? (
          <InputText
            className="h-full w-full"
            onChange={onChangeHandler}
            type={type}
            value={value}
            disabled={disabled}
          />
        ) : (
          <InputTextarea
            autoResize
            className="h-full w-full"
            cols={30}
            onChange={onChangeHandler}
            rows={5}
            value={value}
          />
        )}
      </div>
    </div>
  );
};

export default Index;
