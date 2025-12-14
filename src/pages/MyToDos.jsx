// rrd imports
import { Link } from "react-router-dom";
// custom hooks
import { useCollection } from "../hooks/useCollection";
// icons
import { FaAngleLeft } from "react-icons/fa6";
// components
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
// react imports
import { useState, useEffect } from "react";
// global context
import { useGlobalContext } from "../hooks/useGlobalContext";

function MyToDos() {
  const { user } = useGlobalContext();
  const uid = user?.uid;
  const { data: todos } = useCollection("mytodos", uid);
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");
  const [editId, setEditId] = useState(null);

  const handleEdit = (todo) => {
    setEditId(todo.id);
    setTitle(todo.title);
    setDeadline(todo.deadline);
  };

  useEffect(() => {
    if (!editId) {
      setTitle("");
      setDeadline("");
    }
  }, [editId]);

  return (
    <div className="flex flex-col gap-4">
      <Link
        to={"/"}
        className="text-xl mt-1 rounded-xl text-gray-600 w-12 py-1 flex items-center justify-center hover:bg-gray-200 hover:text-blue-500 cursor-pointer transition-colors duration-200 active:scale-75"
      >
        <FaAngleLeft />
      </Link>
      <div className="flex flex-col lg:flex-row justify-between gap-4">
        {/* ToDo List */}
        <div className="flex overflow-y-auto flex-col w-full lg:w-[450px] gap-2  max-h-[329px]">
          <h2 className="text-xl sm:text-2xl sticky top-0 z-10 bg-white font-bold p-2">
            ToDos:
          </h2>
          {todos && (
            <TodoList
              editId={editId}
              todos={todos}
              handleEdit={handleEdit}
              cancelEdit={() => setEditId(null)}
            />
          )}
        </div>

        {/* ToDo Form */}
        <div className="w-full lg:w-auto mt-4 lg:mt-0">
          <h2 className="text-xl sm:text-2xl font-bold mb-2">
            Create new Todos:
          </h2>
          <TodoForm
            editId={editId}
            title={title}
            setTitle={setTitle}
            deadline={deadline}
            setDeadline={setDeadline}
            setEditId={setEditId}
          />
        </div>
      </div>
    </div>
  );
}

export default MyToDos;
