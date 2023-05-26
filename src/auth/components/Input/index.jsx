import { useState } from 'react';

export const Input = ({
  children,
  type,
  placeholder,
  register,
  name,
  autoComplete,
  error,
  value,
}) => {
  const [inputValue, setInputValue] = useState(value || '');
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const inputClassName = `border-[1px] border-${
    error ? 'alert-error' : 'neutral-500'
  } w-full px-3 min-h-[45px] placeholder:text-neutral-500 outline-0 text-neutral-900`;
  return (
    <div className='relative w-full'>
      <input
        className={inputClassName}
        type={type}
        {...register(name)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        value={inputValue}
        onChange={handleChange}
      />
      <div className='absolute right-4 top-3 text-neutral-500 text-2xl'>{children}</div>
    </div>
  );
};
