import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function DeleteButton({ id }) {
  const taskId = id;

  const deleteTask = () => {
    const Tasks = JSON.parse(localStorage.getItem("Tasks"));
    const updatedTasks = Tasks.filter((task) => task.id !== taskId);
    localStorage.setItem("Tasks", JSON.stringify(updatedTasks));
    window.location.reload();
  };
  return (
    <button
      className="absolute right-2 w-8 hover:text-red-600"
      onClick={deleteTask}
    >
      <FontAwesomeIcon icon={faTrash} />
    </button>
  );
}

export default DeleteButton;
