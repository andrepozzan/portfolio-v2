"use client";

import { Card, CardHeader, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { useEffect, useState } from "react";
import { Chip } from "@nextui-org/chip";

import ModalComponent from "../projects-modal/index";

import { title } from "@/components/primitives";

import "./styles.css";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/data/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  type ProjectProps = {
    id: string;
    technologies: string;
    title: string;
    imageLink: string;
    status: string;
    summary: string;
    buttonText: string;
  };

  return (
    <section className="text-center " id="projects">
      <h1 className={title()}>Meus</h1>
      <h1 className={title({ color: "blue" })}> projetos</h1>
      <ul className="projects__list flex justify-evenly flex-wrap items-center mt-10 gap-10 md:gap-8">
        {projects.map((project: ProjectProps) => {
          return (
            <Card
              key={project.id}
              isFooterBlurred
              className=" projects__card h-[400px] col-span-12 sm:col-span-5 shadow-purple-200"
            >
              <CardHeader className="pb-2 pt-2 px-4 flex relative  justify-between items-start z-20 projects__card-header">
                <div className="flex flex-col justify-between text-start w-full">
                  <small className="text-default-500 uppercase">
                    {project.technologies}
                  </small>
                  <h4 className={title({ size: "ssm" })}>
                    {project.title}
                  </h4>
                </div>

                <Chip
                  className="text-tiny absolute right-2 top-20 shadow-small"
                  color={
                    project.status == "finished"
                      ? "success"
                      : project.status == "development"
                        ? "warning"
                        : "primary"
                  }
                  variant="flat"
                >
                  <strong>
                    {project.status == "finished"
                      ? "Finalizado"
                      : project.status == "development"
                        ? "Em desenvolvimento"
                        : project.status == "prototype"
                          ? "Protótipo"
                          : "Em breve"}
                  </strong>
                </Chip>
              </CardHeader>
              <Image
                isBlurred
                removeWrapper
                alt={project.title}
                className="w-full h-full object-cover projects__card-image z-10"
                src={project.imageLink}
              />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className=" projects__paragraph-description text-tiny text-white/80 ">
                  {project.summary}
                </p>
                <ModalComponent project={project} />
              </CardFooter>
            </Card>
          );
        })}
      </ul>
    </section>
  );
}
