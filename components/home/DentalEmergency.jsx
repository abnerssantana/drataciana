"use client"
import { Container } from "../layout";
import { Button } from "../elements";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motions";
import { MotionRow } from "../common/motion/MotionBlog";
const DentalEmergency = () => {
  return (
    <Container tag="section" variant="lg" className="emergency">
      <MotionRow className='SectionWimage'>
        <div className='SectionWimage__row rowPosition-left'>
          <motion.div
            variants={fadeIn("right", "tween", 0.4, 1)}
            className="SectionWimage__row--col SectionWimage__row--imageWrapper"
          >
            <img
              className="emergency_img"
              src="/assets/home/drataci.png"
              alt="Dra. Taciana Palamoni - Especialista em Ortodontia"
            />
          </motion.div>
          <motion.div
            variants={fadeIn("left", "tween", 0.4, 1)}
            className="SectionWimage__row--col"
          >
            <div className="SectionWimage__row--contentWrapper">
              <p className="label-13">Dra. Taciana Palamoni</p>
              <h2>Especialista em Ortodontia</h2>
              <p className="p-18">Cirurgia Dentista Formada pela Universidade de Alfenas MG (2000), Titulo de Especialista  em Ortodontia e Ortopedia Funcional  dos Maxilares pela  São Leopoldo Mandic de Campinas SP (2007). Membro da Sociedade Brasileira de Toxina Botulínica (2017).</p>
              <div className="btn-full-width">
                <Button size="lg" variant="secondary" type="button">Marque sua consulta</Button>
              </div>
            </div>
          </motion.div>
        </div>
      </MotionRow>
    </Container>
  )
}
export default DentalEmergency