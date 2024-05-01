import { jost } from "../fonts";

import ButtonNews from "./util/buttonNews";
import CarouselNews from "./util/carouselNews";

export default function SectionNews() {
  return (
    <section
      className={`${jost.className} bg-dark-white md:flex-row flex items-center md:flex-1 md:justify-between flex-col`}>
        
      <CarouselNews />

      <div className="flex flex-col items-end gap-12">
        <h1 className="text-xl md:text-4xl border-t-8 border-t-yellow-medium px-4 pt-4 md:w-[40rem] text-center font-medium">
          SOBRE MADRE DE DEUS - BA
        </h1>

        <ButtonNews />
      </div>

    </section>
  );
}
