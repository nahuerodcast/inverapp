import React, { useState } from "react";
import { db } from "../../utils/init-firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { Message } from "./Message";
import { useEffect } from "react";
import { Center } from "@chakra-ui/react";

export const Messages = () => {
  const [newMessages, setNewMessages] = useState(false);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "messages", "id"), (doc) => {
      console.log(doc.id, "Current data: ", doc.data());
    });
    console.log(unsub);
  }, []);

  const tremendo = "value";

  return (
    <>
      {newMessages ? (
        <Message subject={tremendo} message={tremendo} />
      ) : (
        <Center mt={4} color="red.600">
          No se encontraron mensajes
        </Center>
      )}
    </>
  );
};
