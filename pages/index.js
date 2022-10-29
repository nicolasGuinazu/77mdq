import styles from "../styles/Home.module.css";
import { Box } from "@chakra-ui/react";
import Contacto from "./components/Contacto";
import { Image, Button, Link } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  // If you want to use your own Selectors look up the Advancaed Story book examples
  const ImageSlider = ({ slides, show, auto, showIndi }) => {
    return (
      <Carousel
        infiniteLoop
        showStatus={false}
        showArrows={show}
        autoPlay={auto}
        showThumbs={false}
        showIndicators={showIndi}
      >
        {slides.map((slide, i) => {
          return (
            <Image key={i} src={slide.image} height="auto" width="800px" />
          );
        })}
      </Carousel>
    );
  };

  const SlideData = [
    {
      image:
        "https://st.depositphotos.com/1019192/4338/i/950/depositphotos_43389909-stock-photo-tourist-bus-traveling-on-road.jpg",
    },
    {
      image:
        "https://static5.depositphotos.com/1000847/496/i/450/depositphotos_4961954-stock-photo-white-touristic-bus-motion-highway.jpg",
    },
    {
      image:
        "https://st.depositphotos.com/1500876/5013/i/450/depositphotos_50134797-stock-photo-white-and-gray-bus.jpg",
    },
    {
      image:
        "https://static4.depositphotos.com/1003442/349/i/450/depositphotos_3497937-stock-photo-bus.jpg",
    },
    {
      image:
        "https://st.depositphotos.com/2853475/4646/i/950/depositphotos_46469821-stock-photo-touristic-buses.jpg",
    },
  ];

  return (
    <>
      <Head>
        <title>77 mdq</title>
        <meta name="robots" content="all" />
        <meta property="og:title" content="77 mdq" />
        <meta
          property="og:description"
          content="Empresa de transporte turistico de Mar del Plata"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mdq-landing.web.app/" />
        <meta
          property="og:image"
          itemprop="image"
          content="//mdq-landing.web.app/_next/static/media/download.29733d08.png?imwidth=128"
        />
      </Head>
      <main className={styles.main}>
        <ImageSlider slides={SlideData} show={true} auto={true} />

        <div>
          <section>
            <article className={styles.sectionArticle}>
              <h1 className={styles.title}>77 mdq</h1>
              <p className={styles.aboutDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Box w="100%" p={4} color="white">
                <div className={scroll? styles.aboutHome : styles.aboutHide}>
                  <img src="https://static5.depositphotos.com/1000847/496/i/450/depositphotos_4961954-stock-photo-white-touristic-bus-motion-highway.jpg"></img>
                </div>
              </Box>

              <div className={styles.submitButton}>
                <Button mt={5} colorScheme="blue" type="submit">
                  <Link href="/nosotros" style={{ textDecoration: "none" }}>
                    Ver más
                  </Link>
                </Button>
              </div>
            </article>
            <article className={styles.sectionArticle}>
              <h2 className={styles.title}>Servicios</h2>
              <Box w="100%" p={4} color="white">
                <ImageSlider
                  slides={SlideData}
                  show={true}
                  auto={false}
                  showIndi={false}
                />
              </Box>
              <div className={styles.submitButton}>
                <Button colorScheme="blue" type="submit">
                  <Link href="/servicios" style={{ textDecoration: "none" }}>
                    Ver más
                  </Link>
                </Button>
              </div>
            </article>

            <article className={styles.sectionArticleContact}>
              <h2 className={styles.title}>Contacto</h2>
              <div className={styles.contact}>
                <Contacto />
              </div>
            </article>
          </section>
        </div>
      </main>
    </>
  );
}
