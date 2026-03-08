"use client";
import React from "react";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import {
  Linkedin,
  Instagram,
  Github,
  PersonFill,
  Tools,
  TelephoneFill,
} from "@styled-icons/bootstrap";
import { Tabs, Tab } from "@nextui-org/tabs";
import { EmojiEvents, Home, Work } from "@styled-icons/material";
import clsx from "clsx";
import { link as linkStyles } from "@nextui-org/theme";
import { useEffect, useState } from "react";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";

import "./styles.css";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  useEffect(() => {
    const menuElements = document.querySelectorAll(
      ".nextUINavBar__item-text",
    );

    if (isMenuOpen) {
      document.body.classList.add("menu-open");

      menuElements.forEach((element) => {
        element.setAttribute("data-animations", "to-right--active");
      });
    } else {
      document.body.classList.remove("menu-open");

      menuElements.forEach((element) => {
        element.setAttribute("data-animations", "to-right");
      });
    }
  }, [isMenuOpen]);

  const handleSelectionChange = (key: string) => {
    const element = document.querySelector(`[id="${key}"]`);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const useSectionDetection = () => {
    const [activeSection, setActiveSection] = useState<string | null>(
      null,
    );

    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop - windowHeight / 2 &&
          scrollPosition <
            sectionTop + sectionHeight - windowHeight / 2
        ) {
          setActiveSection(section.id);
        }
      });
    };

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return activeSection;
  };

  const activeSection = useSectionDetection();

  return (
    <NextUINavbar
      className="nextUiNavbar fixed left-8 top-1/2 transform -translate-y-1/2  rounded-large z-50"
      id="nextUiNavbar"
      isMenuOpen={isMenuOpen}
      maxWidth="xl"
    >
      <NavbarBrand as="li" className="grow-0">
        <NextLink href="#introduction">
          <div className="nextUINavbar__logo bg-contain" />
        </NextLink>
      </NavbarBrand>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        id="nextUINavbar__menu-toggle"
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
      />
      <ul className="flex-grow">
        <Tabs
          aria-label="Tabs colors"
          className="nextUINavbar__tabs"
          classNames={{
            tabList: "gap-4 border-divider",
            cursor: "w-full bg-navbarCursor",
          }}
          color={"primary"}
          isVertical={true}
          selectedKey={activeSection}
          size="md"
          variant="light"
          onSelectionChange={(key) =>
            handleSelectionChange(key.toString())
          }
        >
          {siteConfig.navItems.map((item) => (
            <Tab
              key={item.id}
              className="nextUINavbar__item-tab"
              title={
                <div
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium",
                    "nextUINavbar__navbar-item",
                  )}
                >
                  <div className="nextUINavbar__icon w-8 h-8">
                    {item.icon == "EmojiEvents" ? (
                      <EmojiEvents />
                    ) : item.icon == "Home" ? (
                      <Home />
                    ) : item.icon == "Work" ? (
                      <Work />
                    ) : item.icon == "PersonFill" ? (
                      <PersonFill />
                    ) : item.icon == "Tools" ? (
                      <Tools className="w-6 h-6" />
                    ) : item.icon == "TelephoneFill" ? (
                      <TelephoneFill className="w-6 h-6" />
                    ) : null}
                  </div>
                  {isMenuOpen && (
                    <div
                      className="ml-4 nextUINavBar__item-text"
                      data-animations="to-right"
                    >
                      {item.label}
                    </div>
                  )}
                </div>
              }
            />
          ))}
        </Tabs>
      </ul>

      <NavbarItem className="nextUINavbar__social-media-links gap-4 box-border ">
        <Link
          isExternal
          aria-label="Linkedin"
          className="link"
          href={siteConfig.links.linkedin}
        >
          <Linkedin className="text-default-500" />
        </Link>
        <Link
          isExternal
          aria-label="Github"
          className="link"
          href={siteConfig.links.github}
        >
          <Github className="text-default-500" />
        </Link>
        <Link
          isExternal
          aria-label="Instagram"
          className="link"
          href={siteConfig.links.instagram}
        >
          <Instagram className="text-default-500" />
        </Link>
        <ThemeSwitch />
      </NavbarItem>
    </NextUINavbar>
  );
};
