import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { Icons } from "@/data/icons";
import "react-vertical-timeline-component/style.min.css";
import sharpe from "../data/logo-icon-white.svg";
import sharpeBanner from "../data/sharpebanner.svg";
import myDurbarBanner from "../data/myDurbarbanner.svg";
import myDurbar from "../data/mydurbar.png";
import Image from "next/image";

import { LinkPreview } from "@/components/ui/link-preview";

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

const experiences = [
  {
    title: "Front-End Developer",
    company_name: "Sharpe Labs",
    icon: sharpe,
    banner: sharpeBanner,
    iconBg: "#383E56",
    date: "December 2023 - February 2024",
    url: "https://earn.sharpe.ai/",
    points: [
      "Independently built a DEX aggregator facilitating seamless token swaps, showcasing proficiency in blockchain technology",
      "Delivered 10+ engaging UX features (referral incentives, dynamic leaderboards, rewarding points system, interactive strategy cards) for a successful MVP, fostering a thriving user community",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "MyDurbar",
    icon: myDurbar,
    banner: myDurbarBanner,

    iconBg: "#E6DEDD",
    date: "July 2023 - October 2023",
    url: "https://corporate.mydurbar.com/",
    points: [
      "Implemented a robust database system, seamlessly transitioning from data files to a meticulously organized database schema, resulting in a 40% reduction in data retrieval time and improved artist data management efficiency",
      "Developed an artist registration page to collect and developed backend functionalities for the artist registration page, enabling seamless data collection and storage",
    ],
  },
];

const ExperienceCard = ({ experience }: any) => {
  return (
    <VerticalTimelineElement
      visible={true}
      contentStyle={{
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        color: "#FFF",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.18)",
        borderRadius: "0.5rem",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <Image
            src={experience.icon}
            className="w-[60%] h-[60%] text-white"
            alt="icons"
          />
        </div>
      }
    >
      <LinkPreview url={experience.url} className="font-bold">
        <Image
          src={experience.banner}
          className="w-[100%] h-[60%] text-white"
          alt="icons"
        />
        <div className="mt-2">
          <h3 className="text-yellow text-[24px] font-bold">
            {experience.title}
          </h3>

          <p className="text-white text-[16px] font-bold" style={{ margin: 0 }}>
            {experience.company_name}
          </p>
        </div>

        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((point: any, index: any) => (
            <li
              key={`experience-point-${index}`}
              className="text-yellow-50 text-[14px] pl-1 tracking-wider font-thin"
            >
              {point}
            </li>
          ))}
        </ul>
      </LinkPreview>{" "}
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div className="m-10">
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="padding max-w-7xl mx-auto relative z-0 "
      >
        <motion.div variants={textVariant(0)}>
          <p className=" text-white sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center">
            What I have done so far{" "}
          </p>
          <h2 className=" text-purple font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
            Work Experience.
          </h2>
        </motion.div>
        <div className="mt-20 flex flex-col">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
          </VerticalTimeline>
        </div>
      </motion.section>
    </div>
  );
};

export default Experience;
