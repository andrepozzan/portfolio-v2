"use client";

import { Image } from "@nextui-org/image";
import { Award } from "@styled-icons/bootstrap";
import { Certificate } from "@styled-icons/fluentui-system-regular";

import { title } from "@/components/primitives";
import "./styles.css";

export default function About() {
  return (
    <section className="text-center mt-20" id="about">
      <h1>
        <div className={title()}>Sobre</div>
        <div className={title({ color: "yellow" })}> mim</div>
      </h1>

      <div className="about__content flex justify-between items-center flex-wrap mt-20 ">
        <div className="about__text-content">
          <p className="text-start mb-4">
            Sempre gostei de realizar diversas atividades desde a
            infância como a música, xadrez e esportes. Desde então,
            estava me dedicado aos estudos para vestibulares e no
            tempo livre programação, assim, em 2024 após ter passado
            em três vestibulares de universidades públicas ingressei
            na UFPR no curso de Engenharia elétrica.
          </p>
          <p className="text-start mb-4">
            Gostaria de compartilhar algumas premiações que obtive:
          </p>
          <ul className="text-start">
            <li className="mb-8">
              <h3 className={title({ size: "ssm", color: "green" })}>
                Matemática
              </h3>
              <ol className="text-start ml-4 awards__list">
                <h4 className="mb-4">Premiações na OBMEP:</h4>
                <li>2017 / Classificado para 2ª fase - nível 1</li>
                <li>
                  <Award className="awards__list-item  text-amber-700" />
                  2018 / Medalha de bronze - nível 1
                </li>
                <li>
                  <Certificate className="awards__list-item text-blue-500" />{" "}
                  2019 / Menção honrosa - nível 2
                </li>
                <li>2020 / Cancelada devido pandemia</li>
                <li>
                  <Certificate className="awards__list-item text-blue-500" />{" "}
                  2021 / Menção honrosa - nível 3
                </li>
                <li>
                  <Certificate className="awards__list-item text-blue-500" />{" "}
                  2022 / Menção honrosa - nível 3
                </li>
                <li>
                  <Certificate className="awards__list-item text-blue-500" />{" "}
                  2023 / Menção honrosa - nível 3
                </li>
                <li>
                  <Award className="awards__list-item text-amber-700" />
                  2023 / Medalha de bronze regional - nível 3
                </li>
              </ol>
            </li>
            <li className="mb-8">
              <h3 className={title({ size: "ssm", color: "cyan" })}>
                Xadrez
              </h3>
              <ol className="text-start ml-4 awards__list">
                <h4 className="mb-4">Premiações xadrez:</h4>
                <li>
                  <Award className="awards__list-item text-gray-400" />
                  2° lugar no primeiro torneio de xadrez em
                  Guaraniaçu-Pr 19/07/2014
                </li>
                <li>
                  <Award className="awards__list-item text-amber-900" />
                  18° lugar campeonato
                  <strong className="text-green-500">
                    {" "}
                    brasileiro
                  </strong>{" "}
                  de xadrez escolar - São sebastião do Paraíso - MG -
                  2015
                </li>
                <li>
                  <Award className="awards__list-item text-amber-900" />
                  8° lugar no circuito
                  <strong className="text-blue-500">
                    {" "}
                    paranaense
                  </strong>{" "}
                  de xadrez rápido Piraí do Sul - PR - 2015
                </li>
                <li>
                  <Award className="awards__list-item text-yellow-500" />
                  1° lugar no circuito de xadrez de Cascavel - 2015
                </li>
                <li>
                  <Award className="awards__list-item text-amber-700" />
                  3° lugar no campeonato
                  <strong className="text-blue-500">
                    {" "}
                    paranaense
                  </strong>{" "}
                  de xadrez - Foz do Iguaçu - PR - 2016
                </li>
                <li>
                  <Award className="awards__list-item text-amber-900" />
                  15° lugar campeonato
                  <strong className="text-green-500">
                    {" "}
                    brasileiro
                  </strong>{" "}
                  de xadrez escolar - 2016
                </li>
                <li>
                  <Award className="awards__list-item text-amber-900" />
                  4° lugar campeonato
                  <strong className="text-blue-500">
                    {" "}
                    paranaense
                  </strong>{" "}
                  de xadrez - Piraí do Sul - PR - 2017
                </li>
                <li className="mt-8">
                  Dentre outras diversas participações em olimpíadas
                  municipais e campeonatos regionais
                </li>
              </ol>
            </li>
            <li className="mb-8">
              <h3 className={title({ size: "ssm", color: "blue" })}>
                Música
              </h3>
              <p className="ml-4">
                Desde 2012 aos 6 anos de idade comecei a tocar teclado
                e em 2013 a participar de eventos com um grupo musical
                para apresentações em casamentos. Também fiz parte da
                Orquestra Mirim de Viola Caipira e me apresentei na
                Virada Cultural de Toledo em 2014.
              </p>
            </li>
          </ul>
        </div>
        <div className="about__photos-grid">
          <div className="flex-col flex justify-center items-center row-span-3 row-start-1 w-full">
            <Image
              isBlurred
              src="/assets/about/obmep/profile-photo-obmep.jpg"
            />
            <p className="text-tiny mt-3 ">
              Auditório Unioeste Premiação 18° Obmep - Cascavel - PR
              (2024)
            </p>
          </div>
          <div className=" row-start-2 col-start-3  ">
            <Image
              isBlurred
              className="w-full"
              src="/assets/about/familia-1.png"
            />
            <p className="text-tiny mt-3">
              Formatura do ensino médio - 2023
            </p>
          </div>
          <div className="">
            <Image
              isBlurred
              className="w-full "
              src="/assets/about/musica/teclado-1.jpg"
            />
            <p className="text-tiny mt-3">
              Apresentação em casamento - 2014
            </p>
          </div>
          <div className="">
            <Image
              isBlurred
              className="w-full"
              src="/assets/about/xadrez/equipe-1.jpg"
            />
            <p className="text-tiny mt-3">
              Jarcans xadrez por equipe - 2023
            </p>
          </div>
          <div className="row-span-2">
            <Image
              isBlurred
              className="w-full"
              src="/assets/about/xadrez/medalhas-1.png"
            />
            <p className="text-tiny mt-3">
              Medalhas de xadrez conquistadas até 2015
            </p>
          </div>
          <div className="col-start-3 row-start-3">
            <Image
              isBlurred
              className="w-full"
              src="/assets/about/xadrez/olimpiadas-municipais-1.jpg"
            />
            <p className="text-tiny mt-3">
              Olimpíadas municipais 1° equipe xadrez - Guaraniaçu - PR
              (2023)
            </p>
          </div>
          <div className="col-start-2 row-start-4 col-span-2">
            <Image
              isBlurred
              className="w-full"
              src="/assets/about/ufpr-1.png"
            />
            <p className="text-tiny mt-3">
              Segunda fase vestibular UFPR - Curitiba - PR (2023)
            </p>
          </div>

          <div className="col-start-1 row-start-4 ">
            <Image
              isBlurred
              className="w-full"
              src="/assets/about/musica/teclado-toledo-1.jpg"
            />
            <p className="text-tiny mt-3">
              Apresentação no teatro municipal de Toledo - PR (2014)
            </p>
          </div>
          <div className="col-start-2 row-start-5 col-span-2 ">
            <Image
              isBlurred
              className="w-full"
              src="/assets/about/xadrez/3-lugar-paranaense.jpg"
            />
            <p className="text-tiny mt-3">
              3° lugar campeonato paranaense de xadrez - Foz do Iguaçu
              - PR (2016)
            </p>
          </div>
          <div className="col-start-1 row-start-5 ">
            <Image
              isBlurred
              className="w-full"
              src="/assets/about/xadrez/jornal-paranaense.jpg"
            />
            <p className="text-tiny mt-3">
              Publicação no jornal Correio do Povo sobre o campeonato
              paranaense de xadrez - 2016
            </p>
          </div>
          <div className="col-start-1 row-start-6 col-span-3">
            <Image
              isBlurred
              className="w-full"
              src="/assets/about/xadrez/medalhas.jpeg"
            />
            <p className="text-tiny mt-3">
              Medalhas e troféus de xadrez conquistados
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
