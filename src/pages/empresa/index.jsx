import Head from 'next/head';

import Header from '../components/Header';
import Logo from '../components/Logo';
import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

export default function Empresa() {
  return (
    <>
      <Head>
        <title>Empresa | Estilo Segurança Patrimonial</title>
        <meta
          name="description"
          content="Oferecemos segurança para todos os momentos. Segurança Patrimonial, Segurança para Eventos, Vigilância e serviços de Limpezas em geral. SAIBA MAIS! Ligue (11) 3313-8850"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>
        <Logo />
        <NavBar />
      </Header>

      <section>
        <Banner />
      </section>

      <Footer />
    </>
  );
}
