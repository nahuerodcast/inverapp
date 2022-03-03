import React from "react";
import { useAuth } from "../../contexts/AuthContext";

export const Email = () => {
  const { currentUser } = useAuth();
  return currentUser.email;
};
