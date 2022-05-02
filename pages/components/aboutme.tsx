import React from 'react';
import Interest from './interest';
import skills from '../../public/assets/interests/skills';
import Link from 'next/link';

const AboutUs: React.FC = () => {
  return (
    <section className={'flex flex-col bg-white py-20 text-3xl md:text-4xl'}>
      <div className="container mx-auto px-11 max-w-5xl">
        <p className="leading-tight mx-auto text-4xl tracking-tight">
          <strong>I am a Chicago based software and web developer </strong>
          focused on developing engaging experiences - currently at{' '}
          <Link href="http://criticalmass.com" passHref>
            <a
              className="transition-all duration-500
              ease-in-out  bg-gradient-to-t from-pink-600
              to-sky-600
              bg-[length:100%_0.1em,_0_0.1em] bg-[position:100%_100%,0_100%] bg-no-repeat hover:bg-[length:100%_100%,_0_0.1em] hover:text-white hover:px-2 hover: rounded"
            >
              Critical Mass
            </a>
          </Link>
          .
        </p>
      </div>
      <div className="container mx-auto max-w-5xl px-11 mt-28 flex flex-col items-center">
        <h2 className="mb-4 text-3xl xl:text-4xl leading-tight tracking-tight self-start">
          Here&apos;s my bread, butter, and a lil&apos; jam:
        </h2>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-10">
          {skills.map(({ name, link }, i) => (
            <Interest key={i} name={name} link={link} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
