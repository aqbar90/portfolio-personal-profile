import cssLogo from '@/assets/about/css.svg';
import htmlLogo from '@/assets/about/html.svg';
import jsLogo from '@/assets/about/js.svg';
import reactLogo from '@/assets/about/react.svg';
import tsLogo from '@/assets/about/ts.svg';

import { TechnologyIcon } from './TechnologyIcon';

export function TechnologiesOrbit() {
  return (
    <>
      <TechnologyIcon
        className='-left-3.25 top-46.75 lg:top-88.25 lg:-left-5.25'
        icon={
          <img
            src={cssLogo}
            alt='CSS'
            className='h-7.75 w-9 lg:h-12.5 lg:w-10.75'
          />
        }
      />

      <TechnologyIcon
        className='left-11.5 top-29.25 lg:top-67 lg:left-16'
        icon={
          <img
            src={jsLogo}
            alt='JavaScript'
            className='size-11.25 lg:size-15.5'
          />
        }
      />

      <TechnologyIcon
        className='left-35.5 top-25.5 lg:top-59 lg:left-52'
        icon={
          <img
            src={tsLogo}
            alt='TypeScript'
            className='size-9.25 lg:size-12.75'
          />
        }
      />

      <TechnologyIcon
        className='right-11.5 top-29.25 lg:top-67 lg:right-16'
        icon={<img src={htmlLogo} alt='HTML' className='size-9 lg:size-12.5' />}
      />

      <TechnologyIcon
        className='-right-3.25 top-46.75 lg:top-88.25 lg:-right-5.25'
        icon={
          <img
            src={reactLogo}
            alt='React'
            className='h-8.75 w-9.75 lg:w-13.5 lg:h-12'
          />
        }
      />
    </>
  );
}
