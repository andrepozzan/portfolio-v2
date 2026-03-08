"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";

import { title } from "@/components/primitives";

import "./styles.css";

export default function AwardsModal(data: any) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        className="font-bold text-white bg-black/20 min-w-16 awards__card-button"
        color="default"
        radius="lg"
        size="md"
        variant="flat"
        onPress={onOpen}
      >
        Ver certificado
      </Button>
      <Modal
        backdrop={"opaque"}
        className="meuModal"
        isOpen={isOpen}
        size="4xl"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col text-center">
                <h2 className={title({ size: "sm" })}>
                  {data.award.title} - {data.award.year}
                </h2>
                <p className="text-small text-default-500">
                  {data.award.summary}
                </p>
              </ModalHeader>
              <ModalBody className="mx-auto">
                <Image
                  isBlurred
                  removeWrapper
                  alt={data.award.title}
                  className="w-full max-w-3xl"
                  src={data.award.imageLink}
                />
                <p className="max-w-96 ml-8">
                  {data.award.description}
                </p>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={onClose}
                >
                  Fechar
                </Button>
                <a
                  href={data.award.validationLink}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Button color="primary" onPress={onClose}>
                    Validar certificado
                  </Button>
                </a>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
