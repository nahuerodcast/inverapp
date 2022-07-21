import { Flex, useColorMode } from "@chakra-ui/react";
import React from "react";
import { Footer } from "../components/global/Footer";
import { UnloggedContent } from "../components/unlogged/UnloggedContent";
import { UnloggedNavbar } from "../components/unlogged/UnloggedNavbar";

export const Layout = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      flexDir={"column"}
      maxW={"100vw"}
      justifyContent={"space-between"}
      // bg={colorMode ? "#fafbf2" : "#282a18"}
      background={colorMode === "light" ? "white" : "#1b1b1b"}
    >
      <UnloggedNavbar toggleColorMode={toggleColorMode} />
      {children}
      <Footer />
    </Flex>
  );
};
