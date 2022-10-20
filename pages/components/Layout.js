import styles from '../../styles/Home.module.css';
import logo from '../../public/download.png'
import Image from 'next/image'
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  useDisclosure,
  Link,
} from '@chakra-ui/react';
import { SocialIcon } from 'react-social-icons';
import React from 'react';
import { HamburgerIcon } from '@chakra-ui/icons';

function SideDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <IconButton
        ref={btnRef}
        colorScheme="white"
        onClick={onOpen}
        size="lg"
        icon={<HamburgerIcon color="black" boxSize="2em" />}
      ></IconButton>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent maxWidth="200">
          <DrawerCloseButton />
          <DrawerHeader />
          <DrawerBody
            color="gray.500"
            fontWeight="bold"
            letterSpacing="wide"
            fontSize="xl"
            fontFamily="Roboto"
            ml="2"
            p="3"
          >
            <p onClick={onClose} className={styles.draweritem}>
              <Link href="/servicios">Servicios</Link>
            </p>
           <p onClick={onClose} className={styles.draweritem}>

              <Link href="/contacto">Contacto</Link>
            </p>
           <p onClick={onClose} className={styles.draweritem}>

              <Link href="/nosotros">Nosotros</Link>
            </p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.draw}>

          <SideDrawer />
          <div className={styles.home}>
          <Link href='/'>
          <Image
      src={logo}
      alt="Picture of the author"
      width="100px"
      height="50px"
    />
          </Link>
         </div>
        </div>
      </header>
      <div className={styles.container}>
        {children}
        <footer className={styles.footer}>
        <div className={styles.social}>
          <SocialIcon url='https://facebook.com' fgColor={"white"} style={{ height: 35, width: 35 , margin:"1rem"}}/>
          <SocialIcon url='https://instagram.com' fgColor={"white"} bgColor={"#9342f5"} style={{ height: 35, width: 35,margin:"1rem" }}/>
          <SocialIcon url='https://whatsapp.com' fgColor={"white"} style={{ height: 35, width: 35, margin:"1rem" }}/>
        </div>
          <div className={styles.logo}>Made with ❤️ by MCG</div>
        </footer>
      </div>
    </>
  );
}
