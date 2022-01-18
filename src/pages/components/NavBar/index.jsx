import NavLink from '../NavLink';

import styles from './styles.module.scss';

export default function NavBar() {
  return (
    <ul className={styles.navbar}>
      <NavLink title="Home" path="/" />
      <NavLink title="Empresa" path="empresa" />
    </ul>
  );
}
