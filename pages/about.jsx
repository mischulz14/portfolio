import Head from 'next/head';
import Navbar from '../components/Navbar';
import  Link  from 'next/link';

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
              I studied nutritional science and genetics. Despite being a
              science enthusiast I also love learning new languages (including
              programming languages!). Do you want to work together?
            </p>
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
