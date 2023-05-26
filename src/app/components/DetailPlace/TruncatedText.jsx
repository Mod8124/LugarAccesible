import React, { useState } from 'react';

export default function TruncatedText({ text }) {
  const [showLargerText, setShowLargerText] = useState(true);

  const handleClick = () => {
    setShowLargerText(!showLargerText);
  };
  return (
    <div onClick={handleClick}>
      {showLargerText ? (
        <p className='truncate ... cursor-pointer'>{text}</p>
      ) : (
        <p className='cursor-pointer'>{text}</p>
      )}
    </div>
  );
}
