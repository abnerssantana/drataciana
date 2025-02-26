"use client"
import React from "react"
import { Container } from "../layout"
import { HOME_SERVICES } from "@/utils/data"
import { Card } from "@/components/elements"
import { motion } from "framer-motion"
import { Heading } from "../common"
import { MotionRow } from "../common/motion/MotionBlog"

// Cores para os cards
const cardColors = [
  "rgb(219, 239, 250)", // azul claro
  "rgb(219, 222, 250)", // lavanda
  "rgb(246, 219, 250)", // rosa claro
  "rgb(250, 219, 226)", // rosa 
  "rgb(219, 250, 232)", // verde menta
  "rgb(250, 242, 219)", // amarelo claro
  "rgb(226, 219, 250)", // lavanda claro
  "rgb(250, 226, 219)"  // pêssego
];

// Animação simplificada
const simpleAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const containerAnimation = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const Services = () => {
  return (
    <Container tag="section" variant="lg">
      <MotionRow className="services">
        <motion.div
          variants={simpleAnimation}
          initial="hidden"
          animate="visible"
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
          className="services-card-grid"
          variants={containerAnimation}
          initial="hidden"
          animate="visible"
        >
          {HOME_SERVICES.map((item, index) => (
            <motion.div
              key={index}
              className="service-card-item"
              variants={simpleAnimation}
            >
              <Card 
                variant="wicon-y"
                image={item.icon}
                title={item.title}
                text={item.text}
                color={cardColors[index % cardColors.length]} // Passa a cor como prop
              />
            </motion.div>
          ))}
        </motion.div>
      </MotionRow>
    </Container>
  )
}

export default Services