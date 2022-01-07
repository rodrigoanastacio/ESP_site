import styles from './styles.module.scss';

export default function NavBar({ children }) {
  return <ul className={styles.navbar}>{children}</ul>;
}
