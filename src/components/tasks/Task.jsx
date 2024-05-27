import React from "react";
import DeleteButton from "./components/DeleteButton";

function Task({ task, id }) {
  return (
    <section className="relative my-2 flex h-12 w-11/12 flex-row items-center rounded-md bg-gray-50">
      <p className="absolute left-2">{task}</p>
      <DeleteButton id={id}></DeleteButton>
    </section>
  );
}

export default Task;
