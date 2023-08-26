import Link from 'next/link';
import React from 'react';
// for /build/static/media/locally imported images
import TomAndJerry from '../public/toj.jpeg';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <section className="section">
      <div className="section-center">
        <h1>About</h1>
        <Link className="btn" href="/">
          Home
        </Link>
        <div className="about-image-container">
          <Image
            // just for downloading this resolution(300x300) image, not for rendering(300x300) image.
            // For rendering, use
            //1) css or
            //2) without using css, you want default initial size of the image, import TomAndJerry from '../public/toj.jpeg';
            //3) If you don't know the to be downloaded image size, use fill, set width for parent
            // width={100}
            // height={100}
            className="toj-image"
            // src={TomAndJerry}
            fill
            sizes="75vw"
            // Here vw defines width of the image CONJUCTION parent element width
            // sizes="100vw" //  Imageimage?url=%2Flarge.jpg&w=1280&q=75
            // sizes="50vw" // => Imageimage?url=%2Flarge.jpg&w=640&q=75
            // sizes="100vw" // => Imageimage?url=%2Flarge.jpg&w=256&q=75
            //For small screen devices, you even want more Selfish images
            // sizes="(max-width: 600px) 50vw, 100vw" // => Imageimage?url=%2Flarge.jpg&w=256&q=75
            src="/large.jpg"
            alt="tom-and-jerry"
            // quality={100} // default 75
          />
        </div>
        {/* <img src="/large.jpg" loading="lazy" alt="tom and jerry" /> */}
        <h1>LAYOUT SHIFTING CHECK</h1>
      </div>
    </section>
  );
};

export default AboutPage;
