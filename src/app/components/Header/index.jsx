import { User } from './User/';
import Search from './Search';

export const Header = () => {
  return (
    <header className='fixed top-0 bg-white w-full h-[50px] lg:h-[56px]  right-0 z-[2] flex items-center justify-between px-4 flex-wrap  shadow-lg shadow-neutral-300/40 '>
      <article className='h-[40px] basis-1/2 flex gap-x-2 lg:gap-x-4'>
        <picture className='flex items-center basis-[90%] lg:basis-auto'>
          <img src='/assets/logo/logo-black.svg' alt='logo' />
        </picture>
        <Search></Search>
      </article>
      <User></User>
    </header>
  );
};
