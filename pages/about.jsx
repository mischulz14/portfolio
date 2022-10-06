import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              About
            </h1>
            <p className="description">
              My name is Michael and I am based in Vienna. I studied nutritional
              science and genetics. Despite being a science enthusiast I also
              love learning new languages (including programming languages!).
            </p>
            <div>
              <p className="tech-heading">Tech stack</p>
              <div className="tech-wrapper">
                <Image src="/html.svg" alt="" width="80" height="80" />
                <Image src="/css.svg" alt="" width="80" height="80" />
                <Image src="/tailwind.svg" alt="" width="80" height="80" />
                <Image src="/sass.svg" alt="" width="80" height="80" />
                <Image src="/js.svg" alt="" width="80" height="80" />
                <Image src="/node.svg" alt="" width="80" height="80" />
                <Image src="/react.svg" alt="" width="80" height="80" />
                <Image src="/next.svg" alt="" width="80" height="80" />
              </div>
            </div>
            <p>Do you want to work together?</p>
            <Link href="/contact">
              <a className="cta">Contact Me!</a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
