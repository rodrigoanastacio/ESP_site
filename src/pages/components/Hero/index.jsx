import styles from './styles.module.scss';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <img src="bg-banner.jpg" alt="" />
      <div className={styles.container}>
        <div className={styles.headline}>
          <h1>Estilo Segurança</h1>
          <p>A segurança que precisa para todos os momentos</p>
        </div>
      </div>
    </div>
  );
}
