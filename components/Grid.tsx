import { HireMe, Info, Location, Process, TechStack } from "./BentoComponents";

const Grid = () => {
  return (
    <section id="about">
      <div className="w-full min-h-screen bg-black-900 ">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="col-span-2 row-span-2">
            <Info />
          </div>
          <div className="col-span-2">
            <Location />
          </div>
          <div className="col-span-4">
            <TechStack />
          </div>
          <div className="col-span-1">
            <HireMe />
          </div>
          <div className="col-span-3">
            <Process />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Grid;
