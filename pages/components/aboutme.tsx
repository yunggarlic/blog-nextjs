import React from 'react';
import Interest from './interest';
import skills from '../../public/assets/interests/skills';

type Skill = {
  name: string;
  link: string;
};

const AboutUs: React.FC = () => {
  return (
    <section className={'flex flex-col bg-white py-20 text-3xl md:text-4xl'}>
      <div className="container mx-auto px-11">
        <p className="leading-tight mx-auto max-w-5xl text-4xl tracking-tight">
          <strong>We will help you shit better apps, faster</strong> at cost,
          scale, and quickly bitch.
        </p>
      </div>
      <div className="container mx-auto px-11 text-center mt-28 flex flex-col justify-center items-center">
        <h2 className="mb-4 text-3xl xl:text-4xl">
          These are some technologies I have been working with...
        </h2>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 lg:gap-20">
          {skills.map(({ name, link }, i) => (
            <Interest key={i} name={name} link={link} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
