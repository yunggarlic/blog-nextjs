import type { NextPage } from 'next';
import Head from 'next/head';
import Masthead from './components/masthead';
import AboutMe from './components/aboutme';

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Tim Ferrari</title>
        <meta name="description" content="Tim Ferrari's Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Masthead />
      <AboutMe />
    </div>
  );
};

export default Home;
