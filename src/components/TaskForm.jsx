import React from "react";

function TaskForm() {
  const createTask = () => {
    let tasks = JSON.parse(localStorage.getItem("Tasks"));
    if (!Array.isArray(tasks)) {
      tasks = [];
    }
    const newTask = {
      id: Date.now(),
      task: document.getElementById("new-task").value,
      state: document.getElementById("state").value,
    };
    if (newTask.task == "") {
      alert("Por favor llenar los datos");
      return;
    }

    tasks.push(newTask);
    localStorage.setItem("Tasks", JSON.stringify(tasks));
    document.getElementById("new-task").value = "";
    window.location.reload();
  };

  return (
    <form
      className="flex flex-row items-center justify-center"
      onSubmit={(Event) => {
        Event.preventDefault();
      }}
    >
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
        type="submit"
        value="Crear"
        onClick={createTask}
      />
    </form>
  );
}

export default TaskForm;
