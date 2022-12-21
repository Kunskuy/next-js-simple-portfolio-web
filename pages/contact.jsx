import Link from "next/link";
import Navbar from "../components/Navbar";
import Head from "next/head";

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
            <h1 className="text-title">Contact</h1>
            <p className="description">Ini kalo mau menghubungi</p>

            <ul className="contact-links">
              <li className="contact-item">Email: kun@gmail.com</li>
              <li className="contact-item">Phone: +620123456789</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
