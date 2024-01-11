import './hero.scss';
import { motion, Variants } from 'framer-motion';

const textVariants: Variants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
  imageContainer: {
    opacity: 0,
    transition: {
      duration: 2,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: '-220%',
    transition: {
      repeat: Infinity,
      repeatType: 'mirror' as const,
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className='hero'>
      <div className='wrapper'>
        <motion.div
          className='textContainer'
          variants={textVariants}
          initial='initial'
          animate='animate'
        >
          <motion.h2 variants={textVariants}>SERGIO AVILA</motion.h2>
          <motion.h1 variants={textVariants}>Software Engineer</motion.h1>
          {/* <motion.div variants={textVariants} className='buttons'>
            <motion.button variants={textVariants}>
              See the Latest Works
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div> */}
          <motion.img
            variants={textVariants}
            animate='scrollButton'
            src='/scroll.png'
            alt=''
          />
        </motion.div>
      </div>
      <motion.div
        className='slidingTextContainer'
        variants={sliderVariants}
        initial='initial'
        animate='animate'
      >
        Frontend Developer
      </motion.div>
      <motion.div
        className='imageContainer'
        variants={textVariants}
        initial='imageContainer'
        animate='animate'
      >
        <img src='/serge.png' alt='' />
      </motion.div>
    </div>
  );
};

export default Hero;
