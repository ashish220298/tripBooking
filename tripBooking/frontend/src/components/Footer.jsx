import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        Company &nbsp; | &nbsp;
        Resources &nbsp; | &nbsp;
        Legal
      </div>
    </footer>
  );
}
