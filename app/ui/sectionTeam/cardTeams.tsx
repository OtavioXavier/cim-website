'use client'

import ButtonTeam from './buttonTeam';
import ContainerCard from './containerCard';
import MemberPage from './memberPage';

import { useState } from 'react';
import { Transition } from '@headlessui/react';

export default function CardTeams() {
  const [member, setMember] = useState('')
  const [team, setTeam] = useState('')

  const takeMemb = (newMemb:string) => {
      setMember(newMemb);
  }

  const takeTeam = (newTeam:string) => {
       setTeam(newTeam)
  }

  return (
    <div className="grid grid-cols-3 mt-10 transition-all">
        <ContainerCard title="Time Acadêmico" takeTeam={takeTeam}>
          <div className='flex gap-6 transition-all'>
            <ButtonTeam title="OX" memb={takeMemb}/>
            <ButtonTeam title="LG" memb={takeMemb}/>
            <ButtonTeam title="TM" memb={takeMemb}/>
          </div>
        </ContainerCard>
        <ContainerCard title="Time Front-end" takeTeam={takeTeam}>
          <div className='flex gap-6 transition-all'>
            <ButtonTeam title="OX" memb={takeMemb}/>
            <ButtonTeam title="LG" memb={takeMemb}/>
          </div>
        </ContainerCard>
        <ContainerCard title="Time Back-end" takeTeam={takeTeam}>
          <div className='flex gap-6 transition-all'>
            <ButtonTeam title="OX" memb={takeMemb}/>
            <ButtonTeam title="LG" memb={takeMemb}/>
          </div>
        </ContainerCard>
        <Transition
        show={member != ''}
        enter="transition ease-out duration-600"
        enterFrom="transform opacity-0 scale-50"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-600"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-50"
      >
        <MemberPage member={member} memb={takeMemb} team={team} className="" />
      </Transition>
        {/* <MemberPage member={member} memb={takeMemb} team={team} 
        
        className={`transition ${(member != '')  ? 'block h-full' : 'h-0'}`}/> */}
        {/* { member != '' && <MemberPage member={member} memb={takeMemb} team={team}/>} */}
      </div>
  )
}