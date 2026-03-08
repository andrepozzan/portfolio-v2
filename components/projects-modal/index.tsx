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
import { Github, Linkedin } from "@styled-icons/bootstrap";
import { BrowserOutline } from "@styled-icons/evaicons-outline";
import { Chip } from "@nextui-org/chip";
import { useEffect } from "react";

import { title } from "@/components/primitives";

import "./styles.css";

export default function ModalComponent(data: any) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  return (
    <>
      <Button
        className="font-bold text-white bg-black/20 min-w-16 projects__card-button"
        color="default"
        radius="lg"
        size="md"
        variant="flat"
        onPress={onOpen}
      >
        Mais informações
      </Button>
      <Modal
        backdrop={"opaque"}
        className="projects-modal"
        isOpen={isOpen}
        size="5xl"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="projects-modal__header flex justify-between gap-1 px-8">
                <div className="flex flex-col gap-1">
                  <small className="text-default-500 uppercase">
                    {data.project.technologies}
                  </small>

                  <h2 className={title({ size: "sm" })}>
                    {data.project.title}
                  </h2>
                  <p className="text-small text-default-500">
                    {data.project.summary}
                  </p>
                </div>
                <Chip
                  className="text-tiny shadow-small"
                  color={
                    data.project.status == "finished"
                      ? "success"
                      : data.project.status == "development"
                        ? "warning"
                        : "primary"
                  }
                  variant="flat"
                >
                  <strong>
                    {data.project.status == "finished"
                      ? "Finalizado"
                      : data.project.status == "development"
                        ? "Em desenvolvimento"
                        : data.project.status == "prototype"
                          ? "Protótipo"
                          : "Em breve"}
                  </strong>
                </Chip>
                <div className="text-center grow max-w-96">
                  <h4 className="mb-4">Links do projeto:</h4>

                  <ul className="flex justify-evenly">
                    {data.project.websiteLink != "" ? (
                      <a
                        className="hover:text-primary-500 transition-all duration-200 project-modal__link"
                        href={data.project.websiteLink}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <BrowserOutline className="w-11" />
                      </a>
                    ) : null}

                    {data.project.githubLink != "" ? (
                      <a
                        className="hover:text-primary-500 transition-all duration-200 project-modal__link"
                        href={data.project.githubLink}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <Github className="w-10" />
                      </a>
                    ) : null}

                    {data.project.linkedinLink != "" ? (
                      <a
                        className="hover:text-primary-500 transition-all duration-200 project-modal__link"
                        href={data.project.linkedinLink}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <Linkedin className="w-10" />
                      </a>
                    ) : null}
                  </ul>
                </div>
              </ModalHeader>
              <ModalBody className="projects-modal__body flex">
                {data.project.videoLink != "" ? (
                  <div>
                    <iframe
                      allowFullScreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      className=" rounded-large"
                      referrerPolicy="strict-origin-when-cross-origin"
                      src={data.project.videoLink}
                      title="YouTube video player"
                    />
                  </div>
                ) : data.project.modalImageLink != "" ? (
                  <div className="projects-modal__image-crop rounded-lg ">
                    <Image
                      isBlurred
                      removeWrapper
                      alt={data.project.title}
                      className="projects-modal__image"
                      id={
                        data.project.modalImageLink != "no-image"
                          ? "projects-modal__image--hover"
                          : ""
                      }
                      src={
                        data.project.modalImageLink != "no-image"
                          ? data.project.modalImageLink
                          : data.project.imageLink
                      }
                    />
                  </div>
                ) : null}
                <div className="projects-modal__spacer" />
                <div className="projects-modal__text">
                  {data.project.description}
                </div>
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
                  href={data.project.websiteLink}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Button color="primary" onPress={onClose}>
                    Visitar projeto
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
