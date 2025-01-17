import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  RadioGroup,
  Radio,
} from "@nextui-org/react";
import { useState } from "react";

const ViewModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalPlacement, setModalPlacement] = useState("auto");

  return (
    <div className="flex flex-col gap-2">
      <div className="flex">
        <Button onPress={onOpen} className="w-full">
          Abrir Modal
        </Button>
      </div>
      <RadioGroup
        label="Grupo"
        orientation="horizontal"
        value={modalPlacement}
        onValueChange={setModalPlacement}
      >
        <Radio value="auto">auto</Radio>
        <Radio value="top">top</Radio>
        <Radio value="bottom">bottom</Radio>
        <Radio value="center">center</Radio>
        <Radio value="top-center">top-center</Radio>
        <Radio value="bottom-center">bottom-center</Radio>
      </RadioGroup>
      <Modal
        isOpen={isOpen}
        // placement={modalPlacement}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Título</ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ViewModal;
