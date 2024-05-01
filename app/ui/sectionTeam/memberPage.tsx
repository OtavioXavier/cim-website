import Image from "next/image";
import { jost } from "../fonts";
import profile from "@/public/Imagem Participante.png";
import github from "@/public/github.svg";
import linkedin from "@/public/linkedin.svg";
import Link from "next/link";

interface MemberProps {
  member: string;
  memb: (arg: string) => void;
  team: string;
  className: string;
}

export default function MemberPage(prop: MemberProps) {
  function handleClick() {
    prop.memb("");
  }

  return (
    <div
      className={`${jost.className} font-medium w-screen  h-full bg-medium-white text-dark-blue py-4 px-8 text-xl mt-12 ${prop.className}`}
    >
      {" "}
      <h2 className="text-4xl mb-8 ml-80 ">{prop.team}</h2>
      <div className="flex flex-1 gap-16 justify-between">
        <div className="flex gap-10">
          <Image
            src={profile}
            width={311}
            height={368}
            alt={`imagem de ${prop.member}`}
          />
          <div className="grid gap-16 w-[22rem] mt-8">
            <div className="grid gap-2">
              <h1 className="uppercase ">nome de {prop.member}</h1>
              <h3 className="justify-self-end">Idade de {prop.member}</h3>
              <h3>Curso e semestre de {prop.member}</h3>
            </div>
            <p>Descrição de {prop.member}</p>
          </div>
        </div>
        <div>
          <div className="flex flex-1 flex-col items-center gap-4">
            <h2 className="text-xl font-bold">Redes Sociais</h2>
            <div className="flex flex-1 flex-col gap-6">
              <Link
                href={"link para rede social do participante"}
                className="flex flex-1 items-center gap-6 justify-between"
              >
                <p>github</p>
                <Image src={github} width={45} height={45} alt="github" />
              </Link>
              <Link
                href={"link para rede social do participante"}
                className="flex flex-1 items-center gap-6"
              >
                <p>linkedin</p>
                <Image src={linkedin} width={45} height={45} alt="linkedin" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <button onClick={handleClick}>Close</button>
    </div>
  );
}
