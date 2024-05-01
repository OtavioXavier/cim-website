
import Logo from '../utils/logo';
import Navbar from './navbar';


export default function Header() {
    return (
      <div className='flex items-center bg-dark-blue justify-between px-4'>
        <Logo/>
        <Navbar />
      </div>
    )
}