import React, { useContext, useRef } from 'react';
import { ScrollContext } from '../../utils/scrollobserver';

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
  const progress = sectionProgress - blockNo;
  if (progress >= 0 && progress < 1) return 1;
  return 0.2;
};

const Skills = () => {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef<HTMLDivElement>(null);

  const numOfPages = 3;
  let progress = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;

    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight;

    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages));
  }

  return (
    <div ref={refContainer} className="bg-black text-white">
      <div className="min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center text-4xl md:text-6xl lg:text-7xl tracking-tight font-semibold">
        <div className="leading-[1.15]">
          <div style={{ opacity: opacityForBlock(progress, 0) }}>
            I know my shit, inside and out.
          </div>
          <span
            className={''}
            style={{ opacity: opacityForBlock(progress, 1) }}
          >
            Our team has nutted on React Native for centuries worldwide success.
            Can you believe we busted this hard on the game? When we came onto
            this scene, our cum was white and sticky. It busted out of our
            penises with premium velocity and viscosity.
          </span>{' '}
          <span style={{ opacity: opacityForBlock(progress, 2) }}>
            Holy shit. I have to run. About to bust in my pants. Not in that way
            though, out of my ass. Going to be a storm back there. A real
            natural disaster.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
