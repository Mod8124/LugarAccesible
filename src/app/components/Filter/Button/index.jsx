export const Button = ({ accesible, active, changeActive }) => {
  return (
    <button
      onClick={() => changeActive(accesible ? 'accesible' : 'no-accesible')}
      className={`bg-white flex h-[44px] px-4 flex items-center gap-x-2 ${
        active && !accesible
          ? 'border-[2px] border-alert-error text-alert-error'
          : active && accesible
          ? 'border-[2px] border-alert-success text-alert-success'
          : 'border-[2px] border-alert-success/0 text-neutral-500'
      }`}
    >
      <img
        className='h-[30px] '
        src={accesible ? '/assets/icons/wheel-accesible.svg' : '/assets/icons/wheel-no.svg'}
        alt='icon wheelchair'
      />
      <span
        className={`font-bold ${
          active && !accesible
            ? 'text-alert-error'
            : active && accesible
            ? 'text-alert-success'
            : 'text-neutral-500'
        }`}
      >
        {accesible ? 'Lugar Accesible' : 'Lugar No-Accesible'}
      </span>
    </button>
  );
};
