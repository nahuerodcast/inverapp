import { doc, onSnapshot } from "firebase/firestore";
import React, { useEffect } from "react";
import { db } from "../../utils/init-firebase";

export const BankAccounts = () => {
  useEffect(() => {
    // const obtenerDatos = async () => {
    //   const datos = await getDocs(collection(db, "bankAccounts"));
    //   datos.forEach((documento) => console.log(documento.data()));
    // };
    // obtenerDatos();

    const datos = onSnapshot(
      doc(db, "bankAccounts", "ulUruWDEsC3j1Sq9dBNC"),
      (doc) => {
        console.log("Current data: ", doc.data());
        console.log(datos);
      }
    );
  }, []);

  return (
    <>
      <h1>puto</h1>
      <h2>re</h2>
    </>
  );
};
