import React from 'react';
import Contacto from './components/Contacto';
import styles from '../styles/Home.module.css';
export default function contacto() {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Contacto</h1>
      <div className={styles.FormControl}>
        <Contacto />
      </div>
    </div>
  );
}
