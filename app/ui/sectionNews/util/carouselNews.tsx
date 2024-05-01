import Image from 'next/image';
import Carousel from '../../carousel/Carousel';

import instagram from "@/public/instagram.svg";
import phone1 from "@/public/Phone1.png";

export default function CarouselNews() {
  return (
    <div className="flex flex-col items-center mt-24">
    <div className="flex items-center">
      <Image src={instagram} width={25} height={25} alt="instagram" />
      <p className="font-medium">/@cim.ucsal.ba</p>
    </div>
    <div className="relative p-20">
      <div className="absolute z-20 ">
        <Image src={phone1} width={250} height={450} alt="celular 2" />
      </div>
      <Carousel />
    </div>
  </div>
  );
}
