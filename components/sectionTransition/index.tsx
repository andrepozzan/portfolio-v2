"use client";

import { Rocket, School } from "@styled-icons/material";
import { PersonFill } from "@styled-icons/bootstrap";

import { title } from "../primitives";

import "./styles.css";

export default function SectionTransition() {
  return (
    <div className="sectionTransition outline rounded-lg outline-primary-100 mb-20 outline-8 hover:outline-green-500 transition-all delay-100">
      <ul className="sectionTransition__list  items-center justify-between flex-wrap text-center align-top ">
        <li className="sectionTransition__list-item p-4 flex flex-col justify-center items-center ">
          <PersonFill className="w-20 h-20" />
          <h3 className={title({ color: "yellow", size: "ssm" })}>Sobre mim</h3>
          <p className="flex-grow">
            Sempre gostei de programação e de assistir vídeos de programadores
            demostrando tecnologias e seus projetos, de pesquisar e desvendar os
            mais variados tipos de ferramentas e tecnologias.
          </p>
        </li>
        <li className="sectionTransition__list-item p-4 flex flex-col justify-center items-center ">
          <School className="w-20 h-20" />
          <h3 className={title({ color: "blue", size: "ssm" })}>
            Universidade
          </h3>
          <p className="flex-grow">
            Passei nos vestibulares da UFPR, Unioeste(Foz do Iguaçu) e
            UTFPR(Pato Branco) para o curso de Engenharia elétrica e acabei
            optando por mudar de cidade e cursar na UFPR.
          </p>
        </li>
        <li className="sectionTransition__list-item p-4 flex flex-col justify-center items-center ">
          <Rocket className="w-20 h-20" />
          <h3 className={title({ color: "green", size: "ssm" })}>Carreira</h3>
          <p className="flex-grow">
            A todo momento procuro evoluir minhas habilidades e conhecimentos em
            programação fullstack, design, DevOps, UX/UI e qualquer tecnologia
            que contribua para o melhor produto final possível.
          </p>
        </li>
      </ul>
    </div>
  );
}
