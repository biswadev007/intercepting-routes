'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';

const Home = () => {
  const [images, setImage] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        'https://picsum.photos/v2/list?page=3&limit=20'
      );
      setImage(data);
    })();
  }, []);

  return (
    <section className='flex flex-wrap justify-center gap-4 items-center'>
      {images.map((el: any) => (
        <Link key={el?.id} href={`/photos/${el?.id}`}>
          <Image
            src={el?.download_url}
            alt='image-url'
            height={250}
            width={250}
            className='aspect-square w-full rounded-xl object-cover'
            priority
          />
        </Link>
      ))}
    </section>
  );
};

export default Home;
