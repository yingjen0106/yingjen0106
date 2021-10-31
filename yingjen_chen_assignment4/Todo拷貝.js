import Task from "./Task";

const Todo = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task, id) => (
        <Task
          key={(task, id)}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Todo;
