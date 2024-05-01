import Image from 'next/image';
import logo from '@/public/Logo-ic-SEM-BORDA.png';

export default function Logo() {
  return (
    <Image 
            src={logo}
            width={100}
            height={100}
            alt='Logo CIM'
            />

  )
}