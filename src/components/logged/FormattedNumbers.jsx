import React from "react";

export const FormattedArs = ({ ars }) => {
  return (
    <p>
      ARS:{" "}
      {new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
      }).format(ars)}
    </p>
  );
};

export const FormattedUsd = ({ usd }) => {
  return (
    <p>
      USD:{" "}
      {new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(usd)}
    </p>
  );
};
