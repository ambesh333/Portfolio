import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import { Icons } from "@/data/icons";

const reviews = [
  {
    name: "TypeScript",
    img: Icons.typescript,
  },
  {
    name: "Redux",
    img: Icons.redux,
  },
  {
    name: "React",
    img: Icons.react,
  },
  {
    name: "NextJs",
    img: Icons.nextjs,
  },
  {
    name: "MongoDb",
    img: Icons.mongodb,
  },
  {
    name: "Javascript",
    img: Icons.javascript,
  },
  {
    name: "Docker",
    img: Icons.docker,
  },
  {
    name: "TailwindCSS",
    img: Icons.tailwindcss,
  },
  {
    name: "Firebase",
    img: Icons.firebase,
  },
  {
    name: "Postgres",
    img: Icons.postgress,
  },
  {
    name: "MaterialUI",
    img: Icons.materialui,
  },
  {
    name: "NodeJS",
    img: Icons.nodejs,
  },
  {
    name: "Prisma",
    img: Icons.prisma,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
export type IconProps = React.HTMLAttributes<SVGElement>;

const ReviewCard = ({
  img: Icon,
  name,
}: {
  img: (props: IconProps) => JSX.Element;
  name: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-60 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Icon className="h-6 w-6 rounded-full" />
        <div className="flex flex-col">
          <figcaption className="text-sm font-large dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
    </figure>
  );
};

export default function ReviewMarquee() {
  return (
    <div className="relative">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} img={review.img} name={review.name} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} img={review.img} name={review.name} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
