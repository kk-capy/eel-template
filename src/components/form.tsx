import React, { FC, useState } from "react";
import useForm from "react-hook-form";

export const Form: FC = () => {
  const { register, handleSubmit, errors } = useForm();
  const [title, setTitle] = useState("?");
  const onSubmit = r => {
    console.log(r);
    setTitle(r.title);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" name="title" ref={register} />
      <input type="submit" value="submit" />
      <p>{title}</p>
    </form>
  );
};

export default Form;
