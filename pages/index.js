import styles from '../styles/Home.module.css';
import { Box } from '@chakra-ui/react';
import ImageSlider from './components/ImageSlider';
import { SlideData } from './components/SlideData';
import Contacto from './components/Contacto';

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Box w="100%" p={4} color="white">
          <ImageSlider slides={SlideData} show={true} auto={false} />
        </Box>
        <div>
          <section>
            <article className={styles.sectionArticle}>
              <h2 className={styles.title}>Nostros</h2>
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
