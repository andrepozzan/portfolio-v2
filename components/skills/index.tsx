"use client";

import { Github } from "@styled-icons/bootstrap";

import { title } from "@/components/primitives";

import "./styles.css";

export default function Skills() {
  return (
    <section className=" text-center mt-20" id="skills">
      <h1>
        <div className={title()}>Minhas</div>
        <div className={title({ color: "blue" })}> habilidades</div>
      </h1>
      <ul className="skills__list mt-16">
        <li className="skills__list-item--devops">
          <h3 className={title({ size: "ssm" })}>DevOps</h3>
          <div className="flex justify-evenly flex-wrap mt-8 skills__list-item">
            <img
              alt=""
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"
            />

            <img
              alt=""
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/debian/debian-plain-wordmark.svg"
            />

            <img
              alt=""
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg"
            />

            <img
              alt=""
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
            />

            <img
              alt=""
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg"
            />
          </div>
        </li>
        <li className="skills__list-item--web">
          <h3 className={title({ size: "ssm" })}>Web</h3>
          <div className="flex justify-evenly flex-wrap mt-8 skills__list-item">
            <img
              alt=""
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            />
            <img
              alt=""
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
            />

            <img
              alt=""
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
            />

            <img
              alt=""
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            />

            <img
              alt=""
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
            />

            <img
              alt=""
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
            />

            <img
              alt=""
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
            />

            <img
              alt=""
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg"
            />
            <img
              alt=""
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg"
            />

            <img
              alt=""
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
            />

            <img
              alt=""
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg"
            />

            <img alt="" src="/assets/skills/strapi.svg" />
          </div>
        </li>
        <li className="skills__list-item--design">
          <h3 className={title({ size: "ssm" })}>
            Design e produção Audiovisual
          </h3>
          <div className="flex justify-evenly flex-wrap mt-8 skills__list-item">
            <img
              alt=""
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gimp/gimp-original.svg"
            />

            <img
              alt=""
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/inkscape/inkscape-original.svg"
            />
            <img alt="" className="bigger" src="/assets/skills/kdenlive.svg" />

            <img
              alt=""
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
            />
          </div>
        </li>
        <li className="skills__list-item--engineering">
          <h3 className={title({ size: "ssm" })}>Engenharia e 3D</h3>
          <div className="flex justify-evenly flex-wrap mt-8 skills__list-item">
            <img
              alt=""
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg"
            />
            <img
              alt=""
              src="https://raw.githubusercontent.com/FreeCAD/FreeCAD/main/src/Gui/Icons/freecad.svg"
            />
            <img alt="" className="bigger" src="/assets/skills/autocad.svg" />
            <img alt="" src="/assets/skills/librecad.png" />
          </div>
        </li>
        <li className="skills__list-item--projects-manager">
          <h3 className={title({ size: "ssm" })}>Gerenciamento de Projeto</h3>
          <div className="flex justify-evenly items-center mt-8 skills__list-item">
            <img
              alt=""
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
            />

            <Github className="w-12" />

            <img
              alt=""
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg"
            />
          </div>
        </li>
        <li className="skills__list-item--others">
          <h3 className={title({ size: "ssm" })}>Outros</h3>
          <div className="flex justify-evenly items-center mt-8 skills__list-item">
            <img alt="" className="bigger" src="/assets/skills/qgis.svg" />
            <img
              alt=""
              className="bigger"
              src="/assets/skills/vixenlights.png"
            />

            <img
              alt=""
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg"
            />

            <img
              alt=""
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
            />

            <img
              alt=""
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
            />
          </div>
        </li>
      </ul>
    </section>
  );
}
