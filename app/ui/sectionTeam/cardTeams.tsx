'use client'

import ButtonTeam from './buttonTeam';
import ContainerCard from './containerCard';
import MemberPage from './memberPage';

import { useState } from 'react';

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
    <div className="grid grid-cols-3 mt-10 ">
        <ContainerCard title="Time Acadêmico" takeTeam={takeTeam}>
          <div className='flex gap-6'>
            <ButtonTeam title="OX" memb={takeMemb}/>
            <ButtonTeam title="LG" memb={takeMemb}/>
            <ButtonTeam title="TM" memb={takeMemb}/>
          </div>
        </ContainerCard>
        <ContainerCard title="Time Front-end" takeTeam={takeTeam}>
          <div className='flex gap-6'>
            <ButtonTeam title="OX" memb={takeMemb}/>
            <ButtonTeam title="LG" memb={takeMemb}/>
          </div>
        </ContainerCard>
        <ContainerCard title="Time Back-end" takeTeam={takeTeam}>
          <div className='flex gap-6'>
            <ButtonTeam title="OX" memb={takeMemb}/>
            <ButtonTeam title="LG" memb={takeMemb}/>
          </div>
        </ContainerCard>
        { member != '' && <MemberPage member={member} memb={takeMemb} team={team}/>}
      </div>
  )
}