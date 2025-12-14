// firebase
import { useFirestore } from "../hooks/useFirestore";
// toaster
import { toast } from "sonner";

// custom hooks
import { useGlobalContext } from "../hooks/useGlobalContext";

function TodoForm({
  editId,
  title,
  setTitle,
  deadline,
  setDeadline,
  setEditId,
}) {
  const { addTodo, updateTodo } = useFirestore();
  const { user } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !deadline) {
      toast.info("Please fill all the fields!");
      return;
    }
    if (editId) {
      updateTodo("mytodos", editId, title, deadline, setEditId);
      return;
    }

    addTodo("mytodos", {
      title,
      deadline: Number(deadline),
      date: new Date(),
      uid: user.uid,
    });

    setTitle("");
    setDeadline("");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col mb-5 w-72 gap-2 lg:w-96 mx-auto "
      >
        <label className="flex flex-col gap-2 w-full">
          <span>Title: </span>
          <input
            className="border px-3 py-1 bg-white rounded-sm"
            type="text"
            placeholder="Cook meal"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label className="flex flex-col gap-2 w-full">
          <span>Deadline: </span>
          <input
            className="border px-3 py-1 bg-white rounded-sm"
            type="number"
            placeholder="123456789"
            onChange={(e) => setDeadline(e.target.value)}
            value={deadline}
          />
        </label>

        <button className="cursor-pointer ml-auto transition-colors duration-300 border-amber-500 border-2 hover:bg-amber-500 hover:text-white bg-white px-5 py-1 rounded">
          {editId ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
