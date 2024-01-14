import { ReactNode } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

const ModalComponent = ({
  children,
  isOpen,
  onOpenChange,
  onClose
}: {
  children: ReactNode;
  isOpen: boolean;
  onOpenChange: () => void;
  onClose: () => void;
}) => {
  const { onOpen } = useDisclosure();
  return (
    <>
      {/* <Button onPress={onOpen}>Open Modal</Button> */}
      <Modal isOpen={isOpen} onClose={onClose} onOpenChange={onOpenChange} size="5xl" backdrop={'blur'} className="pb-6">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1"></ModalHeader>
              <ModalBody>{children}</ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalComponent;
