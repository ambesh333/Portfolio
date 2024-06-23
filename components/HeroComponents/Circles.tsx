import OrbitingCircles from "@/components/magicui/orbiting-circles";
import { Icons } from "@/data/icons";

export default function Circles() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg  ">
      <span
        className="pointer-events-none whitespace-pre-wrap
       bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10"
      >
        <Icons.code />
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="h-[30px] w-[30px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={80}
      >
        <Icons.typescript />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[30px] w-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      >
        <Icons.html />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        reverse
      >
        <Icons.nextjs />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={20}
        reverse
      >
        <Icons.nodejs />
      </OrbitingCircles>
    </div>
  );
}
