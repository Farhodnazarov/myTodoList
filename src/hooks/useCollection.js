// react imports
import { useEffect, useState } from "react";

// firebase imports
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export const useCollection = (collectionName) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const q = query(collection(db, collectionName), orderBy("date", "desc"));

    const unsubscribe = onSnapshot(q, (todoList) => {
      const todoData = todoList.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setData(todoData);
    });

    return () => unsubscribe();
  }, [collectionName]);
  return { data };
};
