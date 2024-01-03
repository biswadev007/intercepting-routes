import React from 'react';
import Modal from '@/components/Modal';
import axios from 'axios';
import PhotoCard from '@/components/PhotoCard';

const PhotoModal = async({ params: { id } }: { params: { id: string } }) => {
  const { data } = await axios.get(`https://picsum.photos/id/${id}/info`);
  
  return (
    <Modal>
      <PhotoCard author={data?.author} download_url={data?.download_url} />
    </Modal>
  );
};

export default PhotoModal;
