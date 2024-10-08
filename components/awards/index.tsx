"use client";

import { Card, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { useEffect, useState } from "react";

import AwardsModal from "../awards-modal";

import { title } from "@/components/primitives";

import "./styles.css";

export default function Awards() {
  const [awards, setAwards] = useState([]);

  useEffect(() => {
    fetch("/data/awards.json")
      .then((response) => response.json())
      .then((data) => setAwards(data));
  }, []);

  type AwardsProps = {
    title: string;
    summary: string;
    year: number;
    imageLink: string;
    validationLink: string;
    textTheme: string;
  };

  return (
    <section className=" text-center mt-20" id="awards">
      <h1>
        <div className={title()}>Meus</div>
        <div className={title({ color: "green" })}> Certificados</div>
      </h1>

      <ul className="awards__list mt-20 flex justify-evenly items-center flex-wrap ">
        {awards.map((award: AwardsProps) => {
          return (
            <Card
              key={award.title + award.year}
              isFooterBlurred
              className="w-1/4 h-[300px] col-span-12 sm:col-span-5 awards__card"
            >
              <Image
                isZoomed
                removeWrapper
                alt="Card example background"
                className="w-full h-full  object-cover z-0 awards__card-image"
                src={award.imageLink}
              />
              <CardFooter className=" absolute bottom-0 z-10 justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-2  shadow-small ">
                <div>
                  <p
                    className={
                      (award.textTheme == "light"
                        ? "text-white"
                        : award.textTheme == "dark"
                          ? "text-black"
                          : "text-gray-400") + " text-tiny"
                    }
                  >
                    {award.title} - {award.year}
                  </p>
                </div>
                <AwardsModal award={award} />
              </CardFooter>
            </Card>
          );
        })}
      </ul>
    </section>
  );
}
