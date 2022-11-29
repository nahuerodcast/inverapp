import { Flex } from "@chakra-ui/react";
import React from "react";
import { Footer } from "../components/global/Footer";
import { UnloggedContent } from "../components/unlogged/UnloggedContent";
import { UnloggedNavbar } from "../components/unlogged/UnloggedNavbar";
import { Layout } from "../layout/Layout";

export const UnloggedContainer = () => {
  return (
    <Layout>
      <UnloggedContent />
    </Layout>
  );
};
