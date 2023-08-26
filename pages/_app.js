import Navbar from '@/components/Navbar';
import '../styles/main.scss';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
