import styles from './styles.module.scss';

export default function Title({ title, subtitle }) {
  return (
    <header className={styles.header}>
      <h2>{title}</h2>
      {subtitle ? <p>{subtitle}</p> : null}
    </header>
  );
}
