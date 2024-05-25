import "./App.css";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <>
      <h1 className="text-center text-5xl ring-slate-900 font-bold mb-8">
        To do App
      </h1>
      <TaskForm></TaskForm>
    </>
  );
}

export default App;
