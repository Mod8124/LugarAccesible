export const Form = ({ children, handleSubmit, onSubmit, title, paragraph }) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='max-w-[480px] w-11/12 text-center'>
      <h1 className='font-bold text-primary-900 text-[36px]'>{title}</h1>
      <p className='w-full text-neutral-500 pt-1 pb-4 '>{paragraph}</p>
      {children}
    </form>
  );
};
