import React from 'react';
import TruncatedText from './TruncatedText';

export default function TabReviews({ reviews }) {
  return (
    <ul className='overflow-auto'>
      {reviews.map((post) => (
        <li key={post.time} className='relative rounded-md p-3 hover:bg-gray-100'>
          <h3 className='text-sm font-bold leading-5 uppercase'>{post.author_name}</h3>
          <TruncatedText text={post.text} />
          <ul className='mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500'>
            <li>{post.relative_time_description}</li>
          </ul>
        </li>
      ))}
    </ul>
  );
}
