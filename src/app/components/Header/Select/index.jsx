import { useToggle } from '../../../../hooks/useToggle';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import { Option } from '../option';

export const Select = ({ options, titleOption, changeTitleOption }) => {
  const [showOptions, toggleShowOptions] = useToggle(false);
  const optionsFirst = options[0];

  return (
    <article className='w-full h-full relative' data-select>
      {/* select'title */}
      <div
        className=' w-full flex justify-center items-center h-full text-neutral-500 gap-x-2 cursor-pointer'
        onClick={toggleShowOptions}
        data-value={optionsFirst.value}
      >
        {titleOption}{' '}
        {showOptions ? (
          <MdKeyboardArrowUp className='text-neutral-700' />
        ) : (
          <MdKeyboardArrowDown className='text-neutral-700' />
        )}
      </div>
      {/* select'menu */}
      {showOptions && (
        <div className='w-[200px] absolute right-0 border-[1px] border-neutral-100 selection:bg-transparent'>
          {options.map((option) => (
            <div
              key={option.title}
              data-value={option.value}
              onClick={() => {
                changeTitleOption(option.title, option.value);
                toggleShowOptions();
              }}
            >
              <Option>
                <span className='text-neutral-700 text-2xl'>{option.icon}</span>{' '}
                <span className='text-neutral-500  basis-full text-center'>{option.title}</span>
              </Option>
            </div>
          ))}
        </div>
      )}
    </article>
  );
};
