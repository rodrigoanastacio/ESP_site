import Image from 'next/image';

import styles from './styles.module.scss';

export default function Logo() {
  return (
    <div className={styles.logo}>
      <Image
        src="/logo-estilo-seguranca-patrimonial.png"
        alt="Logo da Estilo Segurança Patrimonial"
        width={200}
        height={65}
      />
    </div>
  );
}
