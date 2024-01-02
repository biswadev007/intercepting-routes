import Image from 'next/image';
import React from 'react';
import Modal from '@/components/Modal';
import axios from 'axios';

const PhotoModal = async ({ params: { id } }: { params: { id: string } }) => {
  const { data } = await axios.get(`https://picsum.photos/id/${id}/info`);

  return (
    <Modal>
      <Image
        alt=''
        src={data.download_url}
        height={600}
        width={600}
        className='col-span-1 aspect-square w-full object-cover'
      />

      <div className=' bg-white p-2 px-4'>
        <p className='text-sm text-gray-500'>
          Taken by @{(data?.author).split(' ').join('')}
        </p>
      </div>
    </Modal>
  );
};

export default PhotoModal;
