import React from "react";
import { db } from "../../utils/init-firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { Message } from "./Message";
import { useEffect } from "react";

export const Messages = () => {
  useEffect(() => {
    const unsub = onSnapshot(doc(db, "messages"), (doc) => {
      console.log(doc.id, "Current data: ", doc.data());
    });
    console.log(unsub);
  }, []);

  const tremendo = "value";

  return (
    <>
      <button> get dataaaaa</button>
      <Message subject={tremendo} message={tremendo} />
    </>
  );
};
