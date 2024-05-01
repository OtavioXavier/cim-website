import Link from 'next/link';

export default function NavLinks() {
  return (
       <ul className="flex text-medium-blue gap-8 md:gap-16 font-bold text-sm md:text-base">
        <li className='hover:text-ligth-blue transition ease-in-out delay-100'>
          <Link href="">GUETOS</Link>
        </li>
        <li className='hover:text-ligth-blue transition ease-in-out delay-100'>
          <Link href="">SOBRE</Link>
        </li>
        <li className='hover:text-ligth-blue transition ease-in-out delay-100'>
          <Link href="">SUGESTÕES</Link>
        </li>
      </ul>
  )
}