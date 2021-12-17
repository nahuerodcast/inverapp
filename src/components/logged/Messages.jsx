import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/init-firebase";
import { Message } from "./Message";

export const Messages = () => {
  const getdata = async () => {
    const querySnapshot = await getDocs(collection(db, "messages"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
    console.log("hola");
  };

  const tremendo = "value";

  console.log(getdata.querySnapshot);
  return (
    <>
      <Message subject={tremendo} message={tremendo} />
    </>
  );
};
