import Head from 'next/head';
import Navbar from '../components/Navbar';

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              Contact
            </h1>
            <p className="description">
              Thanks for checking out my page! If you want to work together just
              take a look at my contact information:
            </p>
            <ul className="contact-links">
              <li className="contact-item">Email: mi.schulz@hotmail.com</li>
              <li className="contact-item">Phone: +4369911388765</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
