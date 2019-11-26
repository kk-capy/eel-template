import React, { FC, useState } from "react";
import Form from "./form";

export const Index: FC = () => {
  const [result, setResult] = useState("");
  const onClick = async () => {
    const r = await eel.get_python_ver()();
    setResult(r);
  };
  return (
    <div>
      <h1>My App</h1>
      <button onClick={onClick}>get python version</button>
      <p>{result}</p>
      <Form />
    </div>
  );
};

export default Index;
