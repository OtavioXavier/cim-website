import Image from "next/image";
import { jost } from "../fonts";
import profile from "@/public/Imagem Participante.png"

interface MemberProps {
  member: string;
  memb: (arg: string) => void;
  team: string;
}

export default function MemberPage(prop: MemberProps) {
  function handleClick() {
    prop.memb("");
  }

  return (
    <div
      className={`${jost.className} font-medium w-screen  h-full bg-medium-white text-dark-blue p-12 text-xl`}
    >
      <h2 className="text-4xl">{prop.team}</h2>
      <div className="grid grid-cols-3">
        <Image src={profile} width={311} height={368} alt={`imagem de ${prop.member}`}/>
        <div className='grid gap-16'>
        <div className="grid gap-2">
          <h1 className="uppercase ">nome de {prop.member}</h1>
          <h3 className='justify-self-end'>Idade de {prop.member}</h3>
          <h3>Curso de {prop.member}</h3>
        </div>
          <p>Descrição de {prop.member}</p>
        </div>
        <div>
          <div>
            <h2>Redes Sociais</h2>
            <Image />
            <Image />
          </div>
        </div>
      </div>
      <button onClick={handleClick}>Close</button>
    </div>
  );
}
