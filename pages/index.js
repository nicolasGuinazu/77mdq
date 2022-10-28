import styles from '../styles/Home.module.css';
import { Box } from '@chakra-ui/react';
import Contacto from './components/Contacto';
import { Image } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Head from 'next/head';

export default function Home() {
  // If you want to use your own Selectors look up the Advancaed Story book examples
  const ImageSlider = ({ slides, show, auto }) => {
    return (
      <Carousel
        infiniteLoop
        showStatus={false}
        showArrows={show}
        autoPlay={auto}
        showThumbs={false}
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
        'https://st.depositphotos.com/1019192/4338/i/950/depositphotos_43389909-stock-photo-tourist-bus-traveling-on-road.jpg',
    },
    {
      image:
        'https://static5.depositphotos.com/1000847/496/i/450/depositphotos_4961954-stock-photo-white-touristic-bus-motion-highway.jpg',
    },
    {
      image:
        'https://st.depositphotos.com/1500876/5013/i/450/depositphotos_50134797-stock-photo-white-and-gray-bus.jpg',
    },
    {
      image:
        'https://static4.depositphotos.com/1003442/349/i/450/depositphotos_3497937-stock-photo-bus.jpg',
    },
    {
      image:
        'https://st.depositphotos.com/2853475/4646/i/950/depositphotos_46469821-stock-photo-touristic-buses.jpg',
    },
  ];

  return (
    <>
      <Head>
        <title>77 mdq</title>
        <meta name="robots" content="all" />
        <meta property="og:title" content="77 mdq" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mdq-landing.web.app/" />
        <meta
          property="og:image"
          content="https://mdq-landing.web.app/_next/static/media/download.29733d08.png?imwidth=128"
        />
      </Head>
      <main className={styles.main}>
        <Box w="100%" p={0} color="white">
          <ImageSlider slides={SlideData} show={true} auto={false} />
        </Box>
        <div>
          <section>
            <article className={styles.sectionArticle}>
              <h2 className={styles.title}>Nosotros</h2>
              <Box w="100%" p={4} color="white">
                <ImageSlider slides={SlideData} show={false} auto={true} />
              </Box>
            </article>
            <article className={styles.sectionArticle}>
              <h2 className={styles.title}>Unidades</h2>
              <Box w="100%" p={4} color="white">
                <ImageSlider slides={SlideData} show={false} auto={true} />
              </Box>
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
