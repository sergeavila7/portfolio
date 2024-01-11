import { SKILLS, SKILLS2, SKILLS3, SKILLS4 } from '../../constans';
import SkillDataProvider from './SkillDataProvider.';
import './skills.scss';

const Skills = () => {
  return (
    <div className='skills'>
      <div className='skillsContainer'>
        {SKILLS.map((image, index) => (
          <SkillDataProvider
            src={image.src}
            key={index}
            index={index}
            width={image.width}
            height={image.height}
          />
        ))}
      </div>
      <div className='skillsContainer'>
        {SKILLS2.map((image, index) => (
          <SkillDataProvider
            src={image.src}
            key={index}
            index={index}
            width={image.width}
            height={image.height}
          />
        ))}
      </div>
      <div className='skillsContainer'>
        {SKILLS3.map((image, index) => (
          <SkillDataProvider
            src={image.src}
            key={index}
            index={index}
            width={image.width}
            height={image.height}
          />
        ))}
      </div>
      <div className='skillsContainer'>
        {SKILLS4.map((image, index) => (
          <SkillDataProvider
            src={image.src}
            key={index}
            index={index}
            width={image.width}
            height={image.height}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
