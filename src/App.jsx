import "./App.css";
import TaskForm from "./components/TaskForm";
import TodoTask from "./components/tasks/TodoTask";
import DoingTask from "./components/tasks/DoingTask";
import DoneTask from "./components/tasks/DoneTask";

function App() {
  return (
    <>
      <h1 className="mb-8 text-center text-5xl font-bold ring-slate-900">
        To do App
      </h1>
      <TaskForm></TaskForm>
      <div className="my-3 flex flex-row justify-between">
        <TodoTask></TodoTask>
        <DoingTask></DoingTask>
        <DoneTask></DoneTask>
      </div>
    </>
  );
}

export default App;
