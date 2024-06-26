import { SunMedium } from "lucide-react";
import Link from "next/link";
import { navItems } from "../../data/index";

export default function FollowMe() {
  return (
    <div className="flex items-center justify-center w-full bg-black">
      <div className="bg-yellow-1 backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-xl p-6 shadow-lg w-full ">
        <div className="flex flex-row gap-1 items-center justify-center mb-1">
          <SunMedium color="#F2C670" />
          <div className="text-md font-bold text-yellow-1">Follow Me</div>
        </div>

        <div className="flex flex-col gap-3 items-center justify-center mb-1">
          <div
            className="
           pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black
            to-gray-300/80 bg-clip-text text-2xl font-semibold leading-none
            text-transparent dark:from-white dark:to-slate-900/10 
            text-center
          "
          >
            Online Presence
          </div>
        </div>
        <div className="px-5">
          {navItems.slice(0, 3).map(({ name, link, icon: Icon }) => (
            <div
              className="flex justify-start items-center h-15 w-full  p-2 gap-2 mt-3

            bg-yellow rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 
            
            "
              key={name}
            >
              <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-black-100">
                <Icon className="size-4" />
              </div>

              <div className="text-md">
                <Link href={link}>{name}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
