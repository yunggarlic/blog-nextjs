import React from 'react';
import Image from 'next/image';

interface Props {
  name: string;
}

const Interest: React.FC<Props> = ({ name }) => {
  return (
    <div className="w-36 text-center">
      <Image
        src={`/assets/interests/icons/${name.toLowerCase()}.svg`}
        alt={name}
        width={1}
        height={1}
        layout="responsive"
      />
    </div>
  );
};

export default Interest;
