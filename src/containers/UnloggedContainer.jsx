import React from "react";
import { UnloggedContent } from "../components/unlogged/UnloggedContent";
import { UnloggedNavbar } from "../components/unlogged/UnloggedNavbar";

export const UnloggedContainer = () => {
  return (
    <>
      <UnloggedNavbar />
      <UnloggedContent />
    </>
  );
};
