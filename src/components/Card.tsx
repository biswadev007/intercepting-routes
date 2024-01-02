import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Card: React.FC<{ download_url: string, handleClick: (id: string)=> void, id: string }> = ({ download_url, handleClick, id }) => {
  return (
    <div className='h-auto w-80 rounded-lg overflow-hidden'>
      <Link href={`/photos/${id}`}>
        <Image src={download_url} className='cursor-pointer' alt='image-url' width={320} height={320} priority />
      </Link>
    </div>
  )
}

export default Card;