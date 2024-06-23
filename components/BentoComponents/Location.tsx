import Globe from "@/components/magicui/globe";
import { Icons } from "@/data/icons";

export default function () {
  return (
    <div className="relative flex h-full w-full max-h-[15rem] flex-col items-start overflow-hidden rounded-lg border bg-background  pb-40  md:pb-60 md:shadow-xl">
      <div className="flex w-full pt-5 px-10 flex-row items-center">
        <div>
          <Icons.map />
        </div>

        <div className=" flex pl-2">
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-3xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            GOA INDIA
          </span>
        </div>
      </div>
      <div className="top-10 hidden lg:block">
        <Globe />
      </div>
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
    </div>
  );
}
