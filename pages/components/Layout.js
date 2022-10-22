import styles from "../../styles/Home.module.css";
import logo from "../../public/download.png";
import Image from "next/image";
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
} from "@chakra-ui/react";
import { SocialIcon } from "react-social-icons";
import React, { useEffect, useState } from "react";
import { HamburgerIcon, ArrowUpIcon } from "@chakra-ui/icons";

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
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUpHandler = (e) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <header className={styles.header}>
        <nav>
          <ul>
            <li>
              {" "}
              <Link href="/">
                <Image
                  src={logo}
                  alt="Picture of the author"
                  width="100px"
                  height="50px"
                />
              </Link>
            </li>
            <li><Link href="/servicios"style={{ textDecoration: 'none' }}>Servicios</Link></li>
            <li><Link href="/contacto" style={{ textDecoration: 'none' }}>Contacto</Link></li>
           <li> <Link href="/nosotros" style={{ textDecoration: 'none' }}>Nosotros</Link></li>
          </ul>
        </nav>
        <div className={styles.draw}>
          <SideDrawer />
          <div className={styles.home}>
            <Link href="/">
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
            <SocialIcon
              url="https://facebook.com"
              target="_blank"   
              fgColor={"white"}
              style={{ height: 35, width: 35, margin: "1rem" }}
            />
            <SocialIcon
              url="https://instagram.com"
              target="_blank"   
              fgColor={"white"}
              bgColor={"#9342f5"}
              style={{ height: 35, width: 35, margin: "1rem" }}
            />
            <SocialIcon
              url="https://whatsapp.com"
              target="_blank"   
              fgColor={"white"}
              style={{ height: 35, width: 35, margin: "1rem" }}
            />
          </div>
          <div className={styles.logo}>Made with ❤️ by MCG</div>
        </footer>
        <div className={styles.floatButton}>
          <SocialIcon
            url="https://whatsapp.com"
            target="_blank"   

            fgColor={"white"}
            style={{ height: 45, width: 45, margin: 0 }}
          />
        </div>
        {offset ? (
          <div className={styles.floatButtonLeft} onClick={scrollUpHandler}>
            {" "}
            <IconButton
              icon={<ArrowUpIcon />}
              isRound
              size={"md"}
              colorScheme="black"
              variant="outline"
            />{" "}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
