import { Text } from "@chakra-ui/react";
import React from "react";

export const FormattedArs = ({ ars, color }) => {
  return (
    <Text color={color}>
      ARS:{" "}
      {new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
      }).format(ars)}
    </Text>
  );
};

export const FormattedUsd = ({ usd, color }) => {
  return (
    <Text color={color}>
      USD:{" "}
      {new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(usd)}
    </Text>
  );
};
