import styles from './styles.module.scss';

export default function Cards({ title, content }) {
  return (
    <article className={styles.card}>
      <h3>{title}</h3>
      <p>{content}</p>
    </article>
  );
}
