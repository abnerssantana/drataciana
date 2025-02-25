"use client"
import { Container } from "../layout"
import { HOME_SERVICES } from "@/utils/data"
import { Card } from "@/components/elements"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "@/utils/motions"
import { Heading } from "../common"
import { MotionRow } from "../common/motion/MotionBlog"

const Services = () => {
  return (
    <Container tag="section" variant="lg">
      <MotionRow className="services">
        <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        >
          <p className="label-12">Serviços</p>
          <Heading
          variant="res"
          headingLevel="h2"
          headingText="Agende sua consulta"
          description="Oferecemos atendimento personalizado com as mais modernas técnicas e equipamentos para garantir o melhor tratamento para sua saúde bucal."
          />
        </motion.div>

        <motion.div 
        variants={fadeIn("up", "tween", 0.5, 1)}
        className="card-group-grid card-group-grid_4"
        >
          {HOME_SERVICES.map((item, index) => (
            <Card 
            variant="wicon-y"
            key={index}
            image={item.icon}
            title={item.title}
            text={item.text}
            />
          ))}
        </motion.div>
      </MotionRow>
    </Container>
  )
}

export default Services