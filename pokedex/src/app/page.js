import Image from "next/image";
import styles from "./page.module.css";

// Importe toutes les images du dossier assets/webpOptimized/BaseSprites
const images = require.context(
  "./assets/webpOptimized/ShinySprites",
  false,
  /\.(webp)$/
);

export default function Home() {
  return (
    <div className={styles.wrapper}>
      {images.keys().map((key, index) => (
        <div key={key} className={styles.imageWrapper}>
          <div className={styles.imageWrapper}>
            <Image
              src={images(key).default}
              alt={key}
              width={150}
              height={150}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
