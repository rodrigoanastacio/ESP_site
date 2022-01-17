import Head from 'next/head';

import Header from './components/Header';
import Logo from './components/Logo';
import NavBar from './components/NavBar';
import NavLink from './components/NavLink';
import Hero from './components/Hero';
import Cards from './components/Cards';
import Title from './components/Title';

import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Estilo Segurança Patrimonial | Soluções em segurança</title>
        <meta
          name="description"
          content="Oferecemos segurança para todos os momentos. Segurança Patrimonial, Segurança para Eventos, Vigilância e serviços de Limpezas em geral. SAIBA MAIS! Ligue (11) 3313-8850"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>
        <Logo />
        <NavBar>
          <NavLink title="Home" path="/" />
        </NavBar>
      </Header>

      <Hero />

      <section className={styles.services}>
        <div className="container">
          <Cards
            title="Segurança Patrimonial"
            content="Com objetivo de prevenir e reduzir perdas, visando a proteção e a preservação do patrimonio, a equipe da Estilo Segurança Patrimonial é qualificada e estratégicamente focada em prevenção."
          />
          <Cards
            title="Segurança de Eventos"
            content="A segurança é um fator essencial no planejamento de um evento, nossos profissionais tem como missão garantir a integridade e ordem dos presentes, fazendo com que todo evento obtenha excelência em seu resultado final."
          />
          <Cards
            title="Vigilância"
            content="Por exercer uma função receptiva, nossos profissionais de portaria são treinados com foco em relacionamento com pessoas, criando assim um ambiente seguro, agradável e educado."
          />
        </div>
      </section>

      <section className={styles.quality}>
        <div className="container">
          <Title
            title="Qualidade e Excelência em Segurança"
            subtitle="Inventore dolores tempore vitae praesentium quisquam quam aut esse iure officiis"
          />
        </div>
      </section>
    </>
  );
}
