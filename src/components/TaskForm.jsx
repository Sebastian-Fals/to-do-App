import React from "react";

function TaskForm() {
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
        <option value="">Pendiente</option>
        <option value="">Realizando</option>
        <option value="">Hecha</option>
      </select>
      <input
        className="ml-5 rounded-lg border-2 bg-green-200 p-3 text-3xl hover:bg-green-300"
        type="button"
        value="Crear"
      />
    </form>
  );
}

export default TaskForm;
