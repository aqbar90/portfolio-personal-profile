import htmlIcon from '@/assets/skillset/html.svg';
import cssIcon from '@/assets/skillset/css.svg';
import javascriptIcon from '@/assets/skillset/javascript.svg';
import reactIcon from '@/assets/skillset/reactjs.svg';
import mongodbIcon from '@/assets/skillset/mongodb.svg';
import dockerIcon from '@/assets/skillset/docker.svg';
import expressIcon from '@/assets/skillset/expressjs.svg';
import postgresqlIcon from '@/assets/skillset/postgresql.svg';

export interface Skill {
  name: string;
  percentage: number;
  icon: string;
}

export const skills: Skill[] = [
  {
    name: 'HTML',
    percentage: 90,
    icon: htmlIcon,
  },
  {
    name: 'CSS',
    percentage: 90,
    icon: cssIcon,
  },
  {
    name: 'Javascript',
    percentage: 90,
    icon: javascriptIcon,
  },
  {
    name: 'React JS',
    percentage: 90,
    icon: reactIcon,
  },
  {
    name: 'Mongo DB',
    percentage: 90,
    icon: mongodbIcon,
  },
  {
    name: 'Docker',
    percentage: 90,
    icon: dockerIcon,
  },
  {
    name: 'Express JS',
    percentage: 90,
    icon: expressIcon,
  },
  {
    name: 'PostgreSQL',
    percentage: 90,
    icon: postgresqlIcon,
  },
];
