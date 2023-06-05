export const Button = ({ children, isDisabled }) => {
  return (
    <button
      className={
        isDisabled
          ? 'min-h-[45px] bg-primary-900 w-full text-white uppercase overflow-hidden border-0 transition ease-in-out'
          : 'min-h-[45px] bg-primary-900 w-full text-white uppercase overflow-hidden border-0 hover:bg-primary-700 transition ease-in-out'
      }
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};
