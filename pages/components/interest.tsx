import React, { SyntheticEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Skill = {
  name: string;
  link: string;
};

const Interest = ({ name, link }: Skill) => {
  return (
    <Link href={link}>
      <a
        className={`m-2 flex p-2 border-4 border-transparent
        transition-all duration-300 ease-in-out hover:border-red-300`}
        target="_blank"
      >
        <Image
          src={`/assets/interests/icons/${name}.svg`}
          alt={name}
          width={125}
          height={125}
        />
      </a>
    </Link>
  );
};

export default Interest;
