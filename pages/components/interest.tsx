import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

//
type Skill = {
  name: string;
  link: string;
};

const Interest = ({ name, link }: Skill) => {
  return (
    <div className="">
      <Link href={link}>
        <a target="_blank">
          <Image
            src={`/assets/interests/icons/${name}.svg`}
            alt={name}
            width={125}
            height={125}
          />
        </a>
      </Link>
    </div>
  );
};

export default Interest;
