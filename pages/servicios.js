import React from 'react';
import styles from '../styles/Home.module.css';

export default function servicios() {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Servicios</h1>
      <div className={styles.serviceContainer}>
        <section>
          <p>Servicio 1</p>

          <p>Servicio 2</p>

          <p>Servicio 3</p>
        </section>
      </div>
      <h2 className={styles.title}>Unidades</h2>
      <div  className={styles.banner}>
      <img src='https://thumbs.dreamstime.com/z/truck-freight-delivery-4672011.jpg'></img>
      </div>
    </div>
  );
}
