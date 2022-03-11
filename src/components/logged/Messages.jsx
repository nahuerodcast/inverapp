import { Message } from "./Message";
import { Center } from "@chakra-ui/react";

export const Messages = ({ messageArray, filteredSearch }) => {
  return (
    <>
      {messageArray.length !== 0 ? (
        filteredSearch.length !== 0 ? (
          filteredSearch.map((message) => {
            return <Message messageArray={message} />;
          })
        ) : (
          <Center mt={4} color="red.600">
            No se encontraron mensajes
          </Center>
        )
      ) : (
        <Center mt={4} color="red.600">
          No se encontraron mensajes
        </Center>
      )}
    </>
  );
};
