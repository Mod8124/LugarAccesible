export const Option = ({ children }) => {
  return (
    <div className='w-full bg-white flex px-4 items-center gap-x-3 min-h-[45px] hover:bg-neutral-100 border-b-[1px] border-neutral-100 cursor-pointer'>
      {children}
    </div>
  );
};
