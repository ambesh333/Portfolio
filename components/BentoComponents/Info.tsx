import Image from "next/image";
import { BorderBeam } from "../magicui/border-beam";
import info from "./carbon.svg";

export default function Info() {
  return (
    <div className="bg-white  max-h-[15rem] bg-opacity-10 backdrop-filter backdrop-blur-lg border border-opacity-0 rounded-lg ">
      <Image src={info} alt="snippet" />

      <BorderBeam size={250} duration={12} delay={9} />
    </div>
  );
}
