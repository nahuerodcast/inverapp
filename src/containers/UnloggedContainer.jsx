import React from "react";
import { Footer } from "../components/global/Footer";
import { InfoCharts } from "../components/global/InfoCharts";
import { UnloggedContent } from "../components/unlogged/UnloggedContent";
import { UnloggedNavbar } from "../components/unlogged/UnloggedNavbar";

export const UnloggedContainer = () => {
  return (
    <>
      <UnloggedNavbar />
      <UnloggedContent />
      <InfoCharts />
      <Footer/>
    </>
  );
};