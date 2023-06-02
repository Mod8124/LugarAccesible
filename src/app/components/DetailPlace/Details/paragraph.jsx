import { toast } from 'react-hot-toast';
import { MdContentCopy } from 'react-icons/md';

export const Paragraph = ({ children, text }) => {
  const onClick = () => {
    navigator.clipboard.writeText(text);
    toast.success('Copiado al portapapeles', {
      position: 'top-right',
      duration: 1500,
    });
  };
  return (
    <div className='flex items-center gap-x-4 relative showHover w-full'>
      {children}
      <span className='absolute right-1 top-[20%]'>
        <MdContentCopy className='text-neutral-500 hiddenHover cursor-pointer' onClick={onClick} />
      </span>
    </div>
  );
};
