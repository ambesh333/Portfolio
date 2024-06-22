"use client";
import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import RetroGrid from "@/components/magicui/retro-grid";
import Circles from "./HeroComponents/Circles";
import { FlipWords } from "@/components/ui/flip-words";

const Hero = () => {
  const words = ["FULL-STACK", "FRONTEND", "BACKEND"];
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
        <div className="hidden lg:block min-w-[35%] ">
          <Circles />
        </div>
        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <TextGenerateEffect
              words=" Hi There! I'm Ambesh"
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
            />
            {/* <FlipWords
              className="upperCase text-center text-[40px] md:text-5xl lg:text-6xl"
              words={words}
            /> */}
            <TextGenerateEffect
              words=" Developer"
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
            />
            <br />
            <a href="#about">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>

        <RetroGrid />
      </div>
    </div>
  );
};

export default Hero;
