import styles from '../styles/Home.module.css';
import { Box } from "@chakra-ui/react";
import ImageSlider from "./components/ImageSlider";
import { SlideData } from "./components/SlideData";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
      <Box w="100%" p={4} color="white">
      <ImageSlider slides={SlideData} />
    </Box>
        <div className={styles.containner}>
     {/*      <div className={styles.wrapper}>
            <img src="https://picsum.photos/200/100" />
            <img src="https://picsum.photos/id/237/200/100" />
            <img src="https://picsum.photos/id/236/200/100" />
          </div> */}

          <div>
            <h1 className={styles.title}>77Mdq</h1>
          </div>
        </div>
      </main>
    </>
  );
}
