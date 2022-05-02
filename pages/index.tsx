import type { NextPage } from 'next';
import Head from 'next/head';
import Masthead from './components/masthead';
import AboutMe from './components/aboutme';
import Works from './components/works';
import Skills from './components/skills';

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
      <Skills />
      <Works />
    </div>
  );
};

export default Home;
