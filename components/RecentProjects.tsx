"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const textVariant = (delay: any) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

const RecentProjects = () => {
  return (
    <div>
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="padding max-w-7xl mx-auto relative z-0 "
      >
        <motion.div variants={textVariant(0)}>
          <p className=" text-white sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center">
            WHAT I&apos;VE BUILT{" "}
          </p>
          <h2 className=" text-purple font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
            Recent Projects
          </h2>
        </motion.div>
      </motion.section>

      <section id="projects">
        <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10 ">
          {projects.map((item) => (
            <div
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] "
              key={item.id}
            >
              <div className="bg-glass-bg backdrop-blur-xs border border-glass-border p-6 rounded-3xl">
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <Image src="/bg.png" alt="bgimg" width="100" height="100" />
                  </div>
                  <Image
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute bottom-0 rounded-xl"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <Image
                          src={icon}
                          alt="icon"
                          className="p-2"
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      <Link href={item.link} passHref legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer">
                          Check Live Site
                        </a>
                      </Link>
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RecentProjects;
