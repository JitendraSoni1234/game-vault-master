import { useState } from 'react';
import { Link } from 'react-router-dom';
import Moon from './Moon';

function Header() {
  const [dark, setDark] = useState(() => {
    if (localStorage.getItem('mode') === 'true') {
      document.documentElement.classList.add('dark');
      return true;
    }
    return false;
  });

  const darkModeHandler = () => {
    setDark(!dark);
    localStorage.setItem('mode', !dark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className='dark:bg-gray-800 bg-white h-[80px] flex align-middle z-40 dark:text-white body-font sticky top-0 left-0 right-0 shadow-[0_10px_10px_rgba(0,0,0,0.3)]'>
      <div className='w-full p-5 flex flex-wrap align-middle justify-center  py-2 flex-col md:flex-row items-center'>
        <Link to='/' className='flex title-font font-medium items-center text-gray-800 dark:text-white'>
          <h1 className='ml-3 text-3xl'>GameVault</h1>
        </Link>
        <nav className='md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center'></nav>
        <button className='flex items-center gap-[10px]' onClick={darkModeHandler}>
          <Moon dark={dark} className='w-[20px] h-[20px]' />
          <span className='text-[14px] md:text-[17px]'>{dark ? 'Light' : 'Dark'} Mode</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
