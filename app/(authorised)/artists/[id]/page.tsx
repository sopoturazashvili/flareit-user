'use client';
import styles from './page.module.scss'
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Spin } from 'antd';

const Artist = () => {
  const searchParams = useSearchParams();
  const artistId = searchParams.get('artistId');
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    if (artistId) {
      axios
        .get(`https://fakestoreapi.com/products/${artistId}`)
        .then((response:any) => {
          setProduct(response.data);
        })
    }
  }, [artistId]);

  if (!artistId) {
    return <div>No Artist ID provided</div>;
  }
  console.log(product,'product')
  return (
    <div className={styles.mainWrapper}>
      {product ? (
        <div className={styles.wrapper}>
          <h1 >{product?.title}</h1>
          <img src={product?.image} alt={product?.title} />
          <p>{product?.description}</p>
        </div>
      ) : (
        <div className={styles.spinWrapper}>
           <Spin size="large" />
        </div>
       
      )}
    </div>
  );
};

export default Artist;
