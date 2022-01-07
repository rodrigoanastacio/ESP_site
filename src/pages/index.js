import Head from 'next/head';

import Header from './components/Header';
import Logo from './components/Logo';
import NavBar from './components/NavBar';
import NavLink from './components/NavLink';

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
    </>
  );
}
