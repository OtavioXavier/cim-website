import search from "@/public/Search.svg";
import moon from "@/public/Moon Symbol.svg";
import Image from "next/image";
import NavLinks from './navLinks';

export default function Navbar() {
  return (
    <div className="flex items-center gap-16">
       <NavLinks />
      <ul className="flex gap-12">
        <li className="cursor-pointer">
          <button>
            <Image src={search} width={52} height={52} alt="search" />
          </button>
        </li>
        <li className="cursor-pointer">
          <button>
            <Image src={moon} width={52} height={52} alt="toggle theme" />
          </button>
        </li>
      </ul>
    </div>
  );
}
