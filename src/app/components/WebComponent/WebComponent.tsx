import { useContext } from "react";
import VectorGraphic from "@/components/VectorGraphic/VectorGraphic";
import Button from "@/components/Button/Button";
import styles from "./WebComponent.module.scss";

const WebComponent = () => {
  return (
    <div className={styles.WebComponent}>
      <div className={styles.content}>
        <h1 className={styles.title}>jouw gegevens,</h1>
        <h2 className={styles.subtitle}>jouw keuze.</h2>
      </div>
      <div className={styles.action}>
        <VectorGraphic name="logoText" className={styles.logo} />
        <Button href="/onboarding" className={styles.button}>
          Gratis aanmelden
        </Button>
      </div>
    </div>
  );
};

export default WebComponent;
