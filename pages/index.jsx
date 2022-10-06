import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';

function Home() {
  useEffect(() => {
    document.title = 'Michael Schulz Portfolio';
  }, []);
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper">
            <h1 data-cy="homePageTitle" className="title">
              Hi, my name is Michael!
            </h1>
            <p className="description">
              I'm a software developer from Vienna, nice to meet you!
            </p>

            <Link href="/contact">
              <a className="cta">Work with me!</a>
            </Link>
          </div>

          <div className="image-wrapper">
            <Image
              width="400"
              height="400"
              alt="developer-picture"
              src="/undraw_developer_activity_re_39tg.svg"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
