import React from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import PhotoCard from '@/components/PhotoCard';

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
      </div>
      <PhotoCard author={data?.author} download_url={data?.download_url} />
    </div>
  );
};

export default PhotoDetails;
