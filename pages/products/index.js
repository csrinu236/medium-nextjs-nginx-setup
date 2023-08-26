import MyLink from '@/components/MyLink';
import Image from 'next/image';
// import Link from 'next/link';
import React from 'react';

const ProductsPage = ({ posts }) => {
  return (
    <section className="section">
      <div className="section-center mb-2">
        <h1>All Products</h1>
        <MyLink href="/" className="btn">
          Home
        </MyLink>
      </div>

      <div className="section-center posts-center">
        {posts?.map(({ id, name, price, image }) => {
          const { url } = image[0];

          return (
            <MyLink
              prefetch={false}
              href={`/products/${id}`}
              key={id}
              className="single-post"
            >
              <div className="single-post__image">
                <Image
                  fill={true}
                  sizes="33vw"
                  // quality={100}
                  // quality={10} default 75
                  src={url}
                  alt={name}
                />
              </div>
              <div className="single-post__info">
                <h4>{name}</h4>
                <p>Rs.{price}</p>
              </div>
            </MyLink>
          );
        })}
      </div>
    </section>
  );
};

export default ProductsPage;

export async function getStaticProps() {
  console.log(
    '🚀 ~ file: index.js:52 ~ getStaticProps ~ getStaticProps:',
    getStaticProps
  );
  // Call an external API endpoint to get posts
  const url = 'https://course-api.com/javascript-store-products';
  let posts = null;
  try {
    const resp = await fetch(url);
    if (resp.ok) {
      posts = await resp.json();
      const modifiedPosts = posts.map((eachPost) => {
        const {
          id,
          fields: { name, price, image },
        } = eachPost;
        return { id, name, price, image };
      });
      posts = modifiedPosts;
    }
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      posts,
    },
    revalidate: 5,
  };
}
