import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';

function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              Portfolio
            </h1>
            <p className="description">
              These are some of my projects! Check them out!
            </p>

            <div className="portfolio-wrapper">
              <div className="portfolio-item">
                <Link href="https://react-meme-generator14.netlify.app/">
                  <Image
                    width="380"
                    height="380"
                    src="/memes.jpg"
                    className="portfolio-image"
                    alt=""
                  />
                </Link>

                <h4 className="portfolio-name">Meme Generator</h4>
              </div>
              <div className="portfolio-item">
                <Link href="https://react-random-colors.netlify.app/">
                  <Image
                    width="380"
                    height="380"
                    src="/randomcolors.jpg"
                    className="portfolio-image"
                    alt=""
                  />
                </Link>

                <h4 className="portfolio-name">Random Color Generator</h4>
              </div>

              <div className="portfolio-item">
                <Link href="https://rock-paper-scissors-lizard-spock-ms.netlify.app/">
                  <Image
                    width="380"
                    height="380"
                    src="/rock-paper.jpg"
                    className="portfolio-image"
                    alt=""
                  />
                </Link>
                <h4 className="portfolio-name">
                  Rock Paper Scissors Lizard Spock Game
                </h4>
              </div>

              <div className="portfolio-item">
                <Link href="https://cozy-hangman.netlify.app/">
                  <Image
                    width="380"
                    height="380"
                    src="/hangman.jpg"
                    className="portfolio-image"
                    alt=""
                  />
                </Link>

                <h4 className="portfolio-name">Cozy Hangman Game</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
