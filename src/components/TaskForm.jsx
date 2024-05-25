import React from "react";

function TaskForm() {
  const createTask = () => {
    const task = {
      task: document.getElementById("new-task").value,
      state: document.getElementById("state").value,
    };
    localStorage.setItem("Task", JSON.stringify(task));
  };

  return (
    <form className="flex flex-row items-center justify-center">
      <input
        className="h-auto w-2/4 rounded-lg border-2 bg-slate-100 p-3 text-3xl hover:border-green-300 focus:border-none"
        type="text"
        name="new-task"
        placeholder="New Task"
        id="new-task"
      />
      <select
        className="ml-6 cursor-pointer rounded-lg border-2 bg-slate-100 px-1 py-3 text-center text-3xl hover:border-green-300"
        name="state"
        id="state"
      >
        <option value="0">Pendiente</option>
        <option value="1">Realizando</option>
        <option value="2">Hecha</option>
      </select>
      <input
        className="ml-5 rounded-lg border-2 bg-green-200 p-3 text-3xl hover:bg-green-300"
        type="button"
        value="Crear"
        onClick={createTask}
      />
    </form>
  );
}

export default TaskForm;
