import React from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';

const PhotoDetails = async ({ params: { id } }: { params: { id: string } }) => {
  const { data } = await axios.get(`https://picsum.photos/id/${id}/info`);

  return (
    <div>
      <div className='flex justify-between items-center mb-4'>
        <Link href={'/'}>
          <h3 className='text-ls text-blue-200 hover:text-blue-400 cursor-pointer'>
            {'<-Go back'}
          </h3>
        </Link>
        <h3>Taken by @{(data?.author).split(' ').join('')}</h3>
      </div>
      <Image
        src={data?.download_url}
        alt='single-image'
        width={1440}
        height={1080}
      />
    </div>
  );
};

export default PhotoDetails;
