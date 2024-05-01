import Image from "next/image";
import { jost } from "../fonts";

import roadMap from "@/public/RoadMap.png";

export default function SectionRoad() {
  return (
    <div
      className={`${jost.className} p-12 bg-dark-blue flex flex-col gap-16 justify-center items-center md:pt-16`}
    >
      <h1 className="md:text-6xl text-4xl font-medium bg-linha-inferior text-medium-white flex justify-center">
        NOSSO ROADMAP
      </h1>
      <Image src={roadMap} width={1160} height={442} alt="roadMap" />
    </div>
  );
}
