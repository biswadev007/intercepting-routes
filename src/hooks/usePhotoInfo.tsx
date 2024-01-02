'use client';
import React, { useState } from 'react';
import axios from 'axios';

interface Initial {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

const usePhotoInfo = () => {
  const [info, setInfo] = useState<Initial>({
    id: '',
    author: '',
    download_url: '',
    height: 0,
    url: '',
    width: 0,
  });

  async function fetchPhotoInfo(id: string) {
    const { data } = await axios.get(`https://picsum.photos/id/${id}/info`);
    setInfo(data);
  }
  console.log('=----', info);

  return { info, fetchPhotoInfo };
};

export default usePhotoInfo;
