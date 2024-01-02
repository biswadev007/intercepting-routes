import React from 'react';
import Image from 'next/image';

const PhotoCard: React.FC<{ download_url: string; author: string }> = ({
  author,
  download_url,
}) => {
  return (
    <>
      <Image
        alt='selected'
        src={download_url}
        height={600}
        width={600}
        className='col-span-1 aspect-square w-full'
      />

      <div className=' bg-white p-2'>
        <p className='text-sm text-gray-500'>
          Taken by @{author.split(' ').join('')}
        </p>
      </div>
    </>
  );
};

export default PhotoCard;
