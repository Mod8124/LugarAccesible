export const Error = ({ content }) => {
  return (
    <p data-testid='error' className='w-full text-alert-error min-h-[20px] py-1 text-start'>
      {content}
    </p>
  );
};
