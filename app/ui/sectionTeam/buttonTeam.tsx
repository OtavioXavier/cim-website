'use client'
import { jost } from '../fonts';


interface ButtonTeamProps {
  title: string;
  memb: (arg: string) => void;
}

export default function ButtonTeam(prop: ButtonTeamProps) {
  
  function handleClick() {
      prop.memb(prop.title)
  }

  return (
    <button className='bg-medium-white w-28 h-28 rounded-full hover:scale-125 transition' onClick={handleClick}>
         <h1 className={`${jost.className} font-medium text-4xl`}>{prop.title}</h1>
    </button>
  )
  
}