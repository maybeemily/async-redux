import React from 'react';
import styles from './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <section className={styles.Header}>
      <Link to="/"><h1>THE LAST AIRBENDER</h1></Link>
    </section>
  );
}
