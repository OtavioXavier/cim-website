import Image from "next/image";
import Link from "next/link";
import phone2 from "@/public/Phone2.png";

export default function ButtonNews() {
  return (
    <div className="md:mr-16 flex flex-col gap-12 items-end">
      <Image src={phone2} width={650} height={338} alt="celular 2" />

      <Link
        href="https://www.madrededeus.ba.gov.br/detalhe-da-materia/info/a-cidade/6512"
        className="flex items-center font-medium text-xl gap-4 md:gap-8"
        target="_blank"
      >
        <p>SAIBA MAIS</p>
        <div className="hover:scale-110 transition-all">
          <div className="bg-slate-50 rounded-full p-4 shadow-xl">
            <div className="bg-slate-50 border-blue-600 border-4 rounded-full p-4"></div>
          </div>
        </div>
      </Link>
    </div>
  );
}
