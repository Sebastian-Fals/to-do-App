import React from "react";
import Task from "./Task";

function TodoTask() {
  const allTasks = JSON.parse(localStorage.getItem("Tasks"));
  return (
    <article className="mx-2 flex w-1/3 flex-col items-center justify-start rounded-lg bg-amber-200 pb-5">
      <h2 className="block text-2xl">To do taks</h2>
      {allTasks.map((e) => {
        if (e.state == 0) {
          return <Task key={e.id} task={e.task} id={e.id}></Task>;
        }
      })}
    </article>
  );
}

export default TodoTask;
