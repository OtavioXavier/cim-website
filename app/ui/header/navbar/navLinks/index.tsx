import Link from 'next/link';

export default function NavLinks() {
  return (
       <ul className="flex text-medium-blue gap-8 md:gap-16 font-bold text-sm md:text-base">
        <li className='hover:text-cyan-200 transition ease-in-out'>
          <Link href="">GUETOS</Link>
        </li>
        <li className='hover:text-cyan-200 transition ease-in-out'>
          <Link href="">SOBRE</Link>
        </li>
        <li className='hover:text-cyan-200 transition ease-in-out'>
          <Link href="">SUGESTÕES</Link>
        </li>
      </ul>
  )
}