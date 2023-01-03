import { Flex, useColorMode } from "@chakra-ui/react";
import React from "react";
import { Footer } from "../components/global/Footer";
import { UnloggedNavbar } from "../components/unlogged/UnloggedNavbar";

export const Layout = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      flexDir={"column"}
      maxW={"100vw"}
      justifyContent={"space-between"}
      background={colorMode === "light" ? "white" : "#1A202C"}
    >
      <UnloggedNavbar toggleColorMode={toggleColorMode} />
      {children}
      <Footer />
    </Flex>
  );
};
