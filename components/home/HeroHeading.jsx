"use client"
import { Container } from '@/components/layout'
import { CTAgroup } from '@/components/common'
import callIcon from "../../public/assets/home/hero/Hero__call-icon.svg"
import { motion } from 'framer-motion'
import { textVariant } from '@/utils/motions'
import { MotionRow } from '../common/motion/MotionBlog'

const HeroHeading = () => {
  return (
    
    <Container variant="xxl" tag="section">
     <MotionRow>
        <div className='hero_container home__hero'>
          <div className="hero">
            <div className="hero__content wrapper">
              <div className='hero__content--heading'>
                <motion.h1 variants={textVariant(0.5)}>Excelência em Ortodontia desde 2000</motion.h1>
                <motion.p variants={textVariant(0.6)} className="p-18">Referência em São José do Rio Preto, próximo ao Plaza Shopping. Combinamos tecnologia avançada e atendimento especializado para todas as idades.</motion.p>
              </div>
              <motion.div variants={textVariant(0.6)}>
                <CTAgroup variant="btn-left" image={callIcon} btnVariant="primary"/>
              </motion.div>
            </div>
            <motion.div 
              variants={textVariant(0.6)} 
              className="hero__heroimgwrap hero__heroimgwrap--end"
            >
              <img 
              className="heroimg" 
              src="/assets/home/hero/Hero__heading.png"  
              alt="header image" 
              loading="lazy"
              />
            </motion.div>
          </div>
        </div>

        <motion.div
        variants={textVariant(1.0)}
        className='hero_container_text'
        >
          <div className='wrapper'>
            <h2>Seu sorriso perfeito, nossa especialidade.</h2>
            <div className="line"></div>
          </div>
        </motion.div>
      </MotionRow>
    </Container>
  )
}

export default HeroHeading