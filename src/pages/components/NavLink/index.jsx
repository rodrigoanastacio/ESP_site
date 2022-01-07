import Link from 'next/link';

import styles from './styles.module.scss';

export default function NavLink({ title, path }) {
  return (
    <li className={styles.navlink}>
      <Link href={path}>
        <a title={title}>{title}</a>
      </Link>
    </li>
  );
}
