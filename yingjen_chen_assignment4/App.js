import { useState, useEffect } from "react";
import Header from "./components/Header";
import Todo from "./components/Todo";
import AddTask from "./components/AddTask";

function App() {
  const [showbar, setShowbar] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchT();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  //fetch todo
  async function fetchT() {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();

    return data;
  }

  //delete tasks
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  //add tasks
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  //reminder
  const reminderTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header onAdd={() => setShowbar(!showbar)} />
      {showbar && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Todo tasks={tasks} onDelete={deleteTask} onToggle={reminderTask} />
      ) : (
        "No Task To Show"
      )}
    </div>
  );
}

export default App;
