import Link from "next/link";
import Navbar from "../components/Navbar";
import Head from "next/head";

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
            <h1 className="text-title">Portfolio</h1>
            <p className="description">
              Ini bisanya berisi skill dan project-project
            </p>

            <div className="portfolio-wrapper">
              <div className="portfolio-item">
                <img src="Coming Soon" className="portfolio-image" />

                <h4 className="portfolio-name">Coming Soon</h4>
                <div className="portfolio-category">Name Projects</div>
              </div>
              <div className="portfolio-item">
                <img src="Coming Soon" className="portfolio-image" />

                <h4 className="portfolio-name">Coming Soon</h4>
                <div className="portfolio-category">Name Projects</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
