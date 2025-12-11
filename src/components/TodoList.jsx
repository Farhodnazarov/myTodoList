// react icons
import { FaTrash } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";

// custom hooks
import { useFirestore } from "../hooks/useFirestore";
import { useState } from "react";

function TodoList({ todos, editId, handleEdit, cancelEdit }) {
  const [doneId, setDoneId] = useState(null);
  const { deleteTodo } = useFirestore();
  const monthsName = [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "Iyun",
    "Iyul",
    "Avgust",
    "Sentyabr",
    "Oktyabr",
    "Noyabr",
    "Dekabr",
  ];

  const handleDelete = (id) => {
    deleteTodo("mytodos", id);
  };

  const togleDone = (id) => {
    if (doneId === id) setDoneId(null);
    else {
      setDoneId(id);
    }
  };

  return (
    <div>
      {!todos.length && (
        <h3 className="flex flex-col gap-1 items-center text-center px-3">
          <span className="font-semibold text-base sm:text-lg">
            There aren't any todos created yet 😢
          </span>
          <span className="text-sm sm:text-base">Please create a todo 👉</span>
        </h3>
      )}

      {todos.map((todo) => {
        const { id, title, deadline, date } = todo;
        const d = date.toDate();
        const day = d.getDate();
        const month = d.getMonth();
        const hour = d.getHours();
        const minute = d.getMinutes().toString().padStart(2, "0");

        const deadlineDate = new Date(d);
        deadlineDate.setDate(deadlineDate.getDate() + deadline);
        const ddDay = deadlineDate.getDate();
        const ddMonth = deadlineDate.getMonth();
        const ddHour = deadlineDate.getHours();
        const ddMinute = deadlineDate.getMinutes().toString().padStart(2, "0");

        const isDoneId = doneId === id;
        const isEditing = editId === id;

        return (
          <div
            onClick={() => togleDone(id)}
            key={id}
            className={`w-full max-w-[290px] sm:max-w-sm md:max-w-md lg:max-w-[420px] mx-auto border rounded-xl
          px-4 py-3 mb-4 relative group transition-all 
          ${isDoneId ? "opacity-50 line-through" : ""}
        `}
          >
            {/* CREATED TIME */}
            <p className="text-[8px] sm:text-[10px] italic mb-1">
              Created at: {day}-{monthsName[month]} | {hour}:{minute}
            </p>

            {/* CONTENT */}
            <div className="flex justify-between gap-3">
              {/* TITLE */}
              <h2 className="font-semibold text-lg sm:text-xl flex-1 ">
                <span className="font-bold">Task:</span>{" "}
                <span className="">{title}</span>
              </h2>

              {/* DEADLINE */}
              <p className="flex flex-col text-right shrink-0">
                <span className="text-[9px] sm:text-[10px]">deadline :</span>
                <span className="text-[10px] sm:text-[12px]">
                  {ddDay}-{monthsName[ddMonth]} | {ddHour + 1}:{ddMinute}
                </span>
              </p>
            </div>

            {/* DELETE BUTTON */}
            <button
              onClick={() => handleDelete(id)}
              className="absolute transition-all opacity-0 -top-1 -right-1 text-sm sm:text-base
           cursor-pointer group-hover:opacity-100 hover:text-red-500 hover:rotate-12"
            >
              <FaTrash />
            </button>
            {!isEditing && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleEdit(todo);
                }}
                className="absolute transition-all opacity-0 -bottom-1 -right-1 text-sm sm:text-base
           cursor-pointer group-hover:opacity-100 hover:text-red-500 hover:rotate-12"
              >
                <FaPenToSquare />
              </button>
            )}
            {isEditing && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  cancelEdit();
                }}
                className="absolute text-lg transition-all opacity-0 -bottom-1 -right-1 
           cursor-pointer group-hover:opacity-100 hover:text-red-500 hover:rotate-12"
              >
                <MdCancel />
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
