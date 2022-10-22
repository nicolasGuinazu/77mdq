import React from "react";
import styles from "../styles/Home.module.css";
import { CheckIcon, Icon } from "@chakra-ui/icons";
import { MdGpsFixed } from "react-icons/md";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { AiOutlineFileProtect } from "react-icons/ai";
export default function servicios() {
  return (
    <div className={styles.mainService}>
      <h1 className={styles.titleService}>Servicios</h1>
      <div className={styles.serviceContainer}>
        <section>
          <p>
            <CheckIcon /> Servicio 1
          </p>

          <p>
            <CheckIcon /> Servicio 2
          </p>

          <p>
            <CheckIcon /> Servicio 3
          </p>
        </section>
      </div>
      <div className={styles.unitContainer}>
        <h2 className={styles.title}>Unidades</h2>
        <div className={styles.banner}>
          <img src="https://static5.depositphotos.com/1000847/496/i/450/depositphotos_4961954-stock-photo-white-touristic-bus-motion-highway.jpg"></img>
        </div>
        <article className={styles.serviceIcons}>
          <div>
            <div>
              <div>
              <Icon as={MdGpsFixed} /> 
                </div>
              <p>GPS</p>
            </div>
            <div>
              <div><Icon as={BsFillPersonCheckFill} /></div>
              <p>Profesionales</p>
            </div>
            <div>
              <div><Icon as={AiOutlineFileProtect} /></div>
               <p>Certificacion</p>
            </div>
          </div>
          
        </article>
      </div>
    </div>
  );
}
