import {
  HireMe,
  Info,
  Location,
  Process,
  TechStack,
  FollowMe,
} from "./BentoComponents";

import { motion } from "framer-motion";
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

const Grid = () => {
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
            Get to Know Me{" "}
          </p>
          <h2 className=" text-purple font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
            About Section
          </h2>
        </motion.div>
      </motion.section>

      <section id="about">
        <div className="w-full min-h-screen bg-black-900 mb-10 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 md:row-span-2">
              <Info />
            </div>
            <div className="hidden md:block col-span-1 md:col-span-2 lg:col-span-2">
              <Location />
            </div>
            <div className="col-span-1 lg:col-span-4">
              <TechStack />
            </div>
            <div className="col-span-1">
              <FollowMe />
            </div>
            <div className="col-span-1">
              <HireMe />
            </div>
            <div className="col-span-1 lg:col-span-2">
              <Process />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Grid;
