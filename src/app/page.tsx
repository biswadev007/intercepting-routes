'use client'
import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

import Card from '@/components/Card';

const Home = () => {
  const router = useRouter();
  const [images, setImage] = useState([]);
  
  useEffect(()=> {
    (async()=> {
      const { data }= await axios.get('https://picsum.photos/v2/list?page=2&limit=20');
      setImage(data)
    })();
  },[]);

  const handleClick = useCallback((id: string)=> {
    router.push(`/photos/${id}`);
  }, []);
  
  return (
    <section className='flex flex-wrap flex-1 space-x-4 justify-center space-y-4'>
      {
        images.map((el: any) => <Card key={el?.id} download_url={el?.download_url} id={el?.id} handleClick={handleClick} />)
      }
    </section>
  )
}

export default Home;