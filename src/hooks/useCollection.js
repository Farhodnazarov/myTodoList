// react imports
import { useEffect, useState } from "react";

// firebase imports
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export const useCollection = (cn, uid) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const q = query(
      collection(db, cn),
      where("uid", "==", uid),
      orderBy("date", "desc")
    );

    const unsubscribe = onSnapshot(q, (todoList) => {
      const todoData = todoList.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setData(todoData);
    });

    return () => unsubscribe();
  }, [cn, uid]);
  return { data };
};
