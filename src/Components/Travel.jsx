import React from 'react';
import { Clover, ShoppingCart, Package, MapPin, Leaf } from 'lucide-react'; 
import styles from './Travel.module.css';

const TravelToEarn = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Train to Earn</h2>

      <div className={styles.section}>
        <Clover className={styles.icon} />
        <div className={styles.textContent}>
          <h3>Frog Training</h3>
          <p>
          Level up your frog from a dark frog to a crypto superstar.
          </p>
        </div>
      </div>

      
      <div className={styles.section}>
        <ShoppingCart className={styles.icon} />
        <div className={styles.textContent}>
          <h3>Quests</h3>
          <p>
          Complete fun challenges to earn rewards and unlock upgrades.
          </p>
        </div>
      </div>

      
      <div className={styles.section}>
        <Leaf className={styles.icon} /> 
        <div className={styles.textContent}>
          <h3>Invite Friends</h3>
          <p>
          Team up with friends to boost your progress.
          </p>
        </div>
      </div>

      
      <div className={styles.section}>
        <Package className={styles.icon} />
        <div className={styles.textContent}>
          <h3>Upgrades</h3>
          <p>
          Enhance your frog with special items and abilities.
          </p>
        </div>
      </div>

      
      <div className={styles.section}>
        <MapPin className={styles.icon} /> 
        <div className={styles.textContent}>
          <h3>Trade on the Market</h3>
          <p>
            Trade your valuable rewards in the marketplace to turn a profit and
            acquire rare items for future adventures.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TravelToEarn;
