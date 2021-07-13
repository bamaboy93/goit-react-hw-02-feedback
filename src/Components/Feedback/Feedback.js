import React from 'react';
import styles from './Feedback.module.css';

const Feedback = ({ onGood, onNeutral, onBad }) => (
  <div>
    <button className={styles.button} type="button" onClick={onGood}>
      Good
    </button>
    <button className={styles.button} type="button" onClick={onNeutral}>
      Neutral
    </button>
    <button className={styles.button} type="button" onClick={onBad}>
      Bad
    </button>
  </div>
);

export default Feedback;
