import styles from './styles.module.scss';

export default function Header({ children }) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>{children}</div>
    </header>
  );
}
