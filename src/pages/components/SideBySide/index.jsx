import { BsShieldCheck } from 'react-icons/bs';
import styles from './styles.module.scss';

export default function SideBySide() {
  return (
    <div className={styles.sideBySide}>
      <div className={styles.sideImage}>
        <img src="/seguranca-patrimonial.png" alt="" />
      </div>
      <ul className={styles.items}>
        <li>
          <BsShieldCheck />
          <span>Profissionais altamente qualificados</span>
        </li>
        <li>
          <BsShieldCheck />
          <span>Foco em excelência</span>
        </li>
        <li>
          <BsShieldCheck />
          <span>Resultados garantidos</span>
        </li>
        <li>
          <BsShieldCheck />
          <span>Segurança para todo momento</span>
        </li>
      </ul>
    </div>
  );
}
