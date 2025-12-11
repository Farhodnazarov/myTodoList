// firebase firestore
import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
// toaster
import { toast } from "sonner";

export const useFirestore = () => {
  // Add new Todo
  const addTodo = (collectionName, data) => {
    addDoc(collection(db, collectionName), data)
      .then(() => toast.success("New Todo successfully added !!!"))
      .catch((err) => toast.error(err));
  };

  // Delete Todo
  const deleteTodo = (collectionName, id) => {
    deleteDoc(doc(db, collectionName, id))
      .then(() => toast.success("Todo successfully deleted !!!"))
      .catch((err) => toast.error(err));
  };

  //   Update Todo
  const updateTodo = (collectionName, id, title, deadline, setEditId) => {
    const todoRef = doc(db, collectionName, id);

    updateDoc(todoRef, {
      title,
      deadline: Number(deadline),
      date: new Date(),
    })
      .then(() => {
        setEditId(null);
        toast.success("Todo successfully updated !!!");
      })
      .catch((err) => toast.error(err.message));
  };

  return { addTodo, deleteTodo, updateTodo };
};
