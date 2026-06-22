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
        className='-left-3.25 top-46.75'
        icon={<img src={cssLogo} alt='CSS' className='h-7.75 w-9' />}
      />

      <TechnologyIcon
        className='left-11.5 top-29.25'
        icon={<img src={jsLogo} alt='JavaScript' className='h-11.25 w-11.25' />}
      />

      <TechnologyIcon
        className='left-35.5 top-25.5'
        icon={<img src={tsLogo} alt='TypeScript' className='h-9.25 w-9.25' />}
      />

      <TechnologyIcon
        className='right-11.5 top-29.25'
        icon={<img src={htmlLogo} alt='HTML' className='h-9 w-9' />}
      />

      <TechnologyIcon
        className='-right-3.25 top-46.75'
        icon={<img src={reactLogo} alt='React' className='h-8.75 w-9.75' />}
      />
    </>
  );
}
