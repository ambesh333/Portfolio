"use client";

import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";

export default function Process() {
  return (
    <div className="h-full  bg-opacity-10 backdrop-filter backdrop-blur-lg border border-opacity-10 rounded-lg shadow-lg p-10 overflow-hidden">
      <p className="text-3xl font-bold text-yellow-1">
        Enthusiastic about growth and learning
        <span className="font-normal text-gray-400 p-2">
          with a strong eye for detail and a focus on delivering outstanding
          user experiences.
        </span>
      </p>
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.5}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
          "absolute inset-0 h-full skew-y-12"
        )}
      />
    </div>
  );
}
