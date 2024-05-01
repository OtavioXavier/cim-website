import { jost } from "../fonts";
import CardTeams from "./cardTeams";

export default function SectionTeam() {
  return (
    <section
      className={`${jost.className} h-full py-12 bg-light-blue flex flex-col justify-center items-center `}
    >
      <h1 className="text-dark-blue font-medium text-3xl md:text-6xl">
        NOSSO TIME
      </h1>
      <CardTeams />
    </section>
  );
}
