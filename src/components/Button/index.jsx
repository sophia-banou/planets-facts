import React from 'react';
import styles from './Button.module.css';

const Button = ({ number, label, onClick, isActive, planetColor }) => {
  const buttonClass = `${styles.Button} ${isActive ? `${styles.Active} act` : ''}`;
  return (
    <a href="#" className={buttonClass} style={isActive ? {
      backgroundColor: planetColor,
      borderColor: planetColor
    } : {}} onClick={(e) => { e.preventDefault(); onClick(); }}>
      <h3 className={styles.Number}>{number}</h3>
      <h3 className={styles.Label}>{label}</h3>
    </a>
  );
};

export default Button;
