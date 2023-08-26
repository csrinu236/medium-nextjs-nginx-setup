import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import styles from '../../styles/single-product.module.scss';

const SingleProductPage = ({ singlePost }) => {
  const {
    fields: { company, name, description, colors, price, image },
  } = singlePost;
  const { url } = image[0];

  //   const router = useRouter();
  // router.query
  // router.isReady
  //   console.log(router);
  return (
    <div className="section">
      <div className="section-center">
        <article className={styles['single-page-product']}>
          <div className={styles['img-container']}>
            <Image src={url} fill alt={name} sizes="100vw" />
          </div>
          <div className={styles['single-product-info']}>
            <h2 className={styles['product-title']}>{name}</h2>
            <h4>By {company}</h4>
            <p className={styles['price']}>Rs. {price}</p>
            <div className={styles['colors']}>
              {colors.map((clr, index) => {
                return (
                  <span key={index} style={{ backgroundColor: clr }}></span>
                );
              })}
            </div>
            <p className={styles['description']}>{description}</p>
            <button className="btn">Buy Now</button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default SingleProductPage;

export async function getStaticProps(context) {
  const {
    params: { productId },
  } = context;

  if (process.env.NODE_ENV === 'production') {
    console.log('===============================================');
    console.log('On The Fly Generating single product page ', productId);
    console.log('===============================================');
  }

  const url = `https://course-api.com/javascript-store-single-product?id=${productId}`;

  const res = await fetch(url);
  const singlePost = await res.json();

  return {
    props: {
      singlePost,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    // revalidate: 10, // In seconds
  };
}

export async function getStaticPaths(context) {
  //   const res = await fetch('https://.../posts');
  //   const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  //   const paths = posts.map((post) => ({
  //     params: { id: post.id },
  //   }));

  // We'll pre-render only these paths at build time.
  // { fallback: 'blocking' } will server-render pages
  // on-demand if the path doesn't exist.
  return {
    paths: [],
    fallback: 'blocking',
  };
}
