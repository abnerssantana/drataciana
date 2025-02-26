"use client"
import { Container } from "../layout"
import { CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import { fadeIn } from "@/utils/motions"
import { MotionRow } from "../common/motion/MotionBlog"

const Experts = () => {
  return (
    <Container tag="section" variant="lg" className="experts">
      <MotionRow>
      <div className="experts__wrapper">
        <motion.div 
        variants={fadeIn("right", "tween", 0.4, 1)}
        className='experts__content--heading'
        >
          <p className="label-12">Inovação e Conforto no Cuidado Odontológico</p>
          <h2>Especialistas em fazer você sorrir</h2>
          <p className="p-18">Seu sorriso é único, e no nosso consultório de odontologia, somos empenhados em oferecer um atendimento excepcional que fazem toda a diferença.</p>
          <ul className="experts__content--list">
            <li><CheckCircle color="#583FBC"/>24 anos no mercado - Experiência alinhada à modernidade</li>
            <li><CheckCircle color="#583FBC"/>20 especialidades - Serviços completos nas principais especialidades odontológicas</li>
            <li><CheckCircle color="#583FBC"/>5 estrelas em satisfação - Nota máxima nas avaliações por nossos clientes</li>
          </ul>
        </motion.div>

        <motion.div 
        variants={fadeIn("left", "tween", 0.4, 1)}
        className="experts__content--image_wrap"
        >
          <img 
          src="/assets/home/home_experts-in-dental.png" 
          alt="especialistas em odontologia" 
          title="especialistas em odontologia" 
          loading="lazy"
          />
        </motion.div>
      </div>

      </MotionRow>
    </Container>
  )
}

export default Experts