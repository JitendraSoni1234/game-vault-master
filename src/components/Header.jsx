import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='dark:bg-gray-800 bg-white h-[80px] flex align-middle z-40 dark:text-white body-font sticky top-0 left-0 right-0 shadow-[0_10px_10px_rgba(0,0,0,0.3)]'>
      <div className='w-full p-5 flex flex-wrap align-middle justify-center  py-2 flex-col md:flex-row items-center'>
        <Link to='/' className='flex title-font font-medium items-center text-gray-800 dark:text-white'>
          <h1 className='ml-3 text-3xl'>GameVault</h1>
        </Link>
        <nav className='md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center'></nav>
      </div>
    </header>
  );
}

export default Header;
