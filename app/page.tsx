import { Chip } from "@nextui-org/chip";

import Introduction from "@/components/introduction";
import Projects from "@/components/projects";
import SectionTransition from "@/components/sectionTransition";
import Awards from "@/components/awards";
import About from "@/components/about";
import Skills from "@/components/skills";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <div className="introduction__video-gradient" />
      <video
        autoPlay
        loop
        muted
        className="introduction__background-video introduction__background-video--dark"
      >
        <source
          src="./assets/background/introduction-background-video.mp4"
          type="video/mp4"
        />
      </video>
      <video
        autoPlay
        loop
        muted
        className="introduction__background-video introduction__background-video--light"
      >
        <source
          src="./assets/background/introduction-background-video-white.mp4"
          type="video/mp4"
        />
      </video>

      <div className="introduction__background-overlay">
        <Introduction />
        <div className="introduction__divider w-full left-0 opacity-50 h-24 bg-divider shadow-2xl">
          <Chip
            className="textAnimation"
            color="primary"
            variant="dot"
          >
            André Corso Pozzan - Engenharia elétrica UFPR
          </Chip>
        </div>
      </div>
      <SectionTransition />
      <Projects />
      <Awards />
      <About />
      <Skills />
      <Contact />
    </>
  );
}
