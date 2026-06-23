import { skills } from './skill-data';
import { SkillCard } from './SkillCard';

export function SkillGrid() {
  return (
    <div className='grid grid-cols-2 gap-4 lg:gap-5 lg:grid-cols-4'>
      {skills.map((skill) => (
        <SkillCard key={skill.name} skill={skill} />
      ))}
    </div>
  );
}
