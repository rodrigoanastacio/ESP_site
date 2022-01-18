import styles from './styles.module.scss';

export default function Footer() {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <p>
          © 2015 - {year} | Estilo Segurança Patrimonial - CNPJ
          24.876.017/0001-75
        </p>
        <p>Desenvolvido por:</p>
      </div>
    </footer>
  );
}
