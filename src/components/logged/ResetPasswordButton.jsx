import React from "react";
import {
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useToast,
} from "@chakra-ui/react";
import { useAuth } from "../../contexts/AuthContext";

export const ResetPasswordButton = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();

  const { forgotPassword } = useAuth();
  const { currentUser } = useAuth();
  const email = currentUser.email;
  const toast = useToast();

  const resetPassword = async () => {
    await forgotPassword(email)
      .then(() => {
        toast({
          description: "Clave restablecida con éxito",
          status: "success",
          duration: 1500,
          isClosable: true,
        });
      })
      .catch((e) => {
        toast({
          description: e.message,
          status: "error",
          duration: 1500,
          isClosable: true,
        });
      });
  };

  return (
    <>
      <Button variant="link" fontSize="x-small" onClick={() => setIsOpen(true)}>
        Restablecé tu contraseña
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Restablecer contraseña
            </AlertDialogHeader>
            <AlertDialogBody>
              Enviaremos a tu correo electrónico un link para que puedas cambiar
              tu clave.
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancelar
              </Button>
              <Button colorScheme="blue" onClick={resetPassword} ml={3}>
                Restablecer
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};
