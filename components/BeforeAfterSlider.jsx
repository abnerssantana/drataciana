"use client"
import React, { useState } from 'react';
import { Container } from "../components/layout";
import { Button } from "../components/elements";
import { motion } from "framer-motion";
import { delayContainer, fadeIn } from "@/utils/motions";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CasesSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Dados dos casos de transformação (usando imagens já combinadas)
  const caseGroups = [
    // Primeiro conjunto de casos
    [
      {
        image: "/assets/casos/caso1.jpeg",
        title: "Alinhamento Dental",
        description: "Tratamento: 18 meses"
      },
      {
        image: "/assets/casos/caso2.jpeg",
        title: "Mordida Cruzada",
        description: "Tratamento: 12 meses"
      },
      {
        image: "/assets/casos/caso3.jpeg",
        title: "Espaçamento Dental",
        description: "Tratamento: 14 meses"
      }
    ],
    [
      {
        image: "/assets/casos/caso4.jpeg",
        title: "Correção de Sobremordida",
        description: "Tratamento: 16 meses"
      },
      {
        image: "/assets/casos/caso5.jpeg",
        title: "Invisalign Completo",
        description: "Tratamento: 11 meses"
      },
      {
        image: "/assets/casos/caso6.jpeg",
        title: "Harmonia Facial",
        description: "Tratamento: 20 meses"
      }
    ],
    [
      {
        image: "/assets/casos/caso7.jpeg",
        title: "Correção de Sobremordida",
        description: "Tratamento: 16 meses"
      },
      {
        image: "/assets/casos/caso8.jpeg",
        title: "Invisalign Completo",
        description: "Tratamento: 11 meses"
      },
      {
        image: "/assets/casos/caso9.jpeg",
        title: "Harmonia Facial",
        description: "Tratamento: 20 meses"
      }
    ]
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % caseGroups.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? caseGroups.length - 1 : prev - 1));
  };

  return (
    <Container tag="section" variant="lg" className="cases-section">
      <motion.div
        variants={delayContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="heading--center">
          <motion.p variants={fadeIn("up", "tween", 0.2, 1)} className="label-12">Casos Reais</motion.p>
          <motion.h2 variants={fadeIn("up", "tween", 0.3, 1)}>Transformações que Inspiram</motion.h2>
          <motion.p variants={fadeIn("up", "tween", 0.4, 1)} className="p-18">
            Veja o impacto dos nossos tratamentos ortodônticos na vida de nossos pacientes
          </motion.p>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.5, 1)}
          className="cases-slider"
        >
          <div className="cases-container">
            {caseGroups[currentSlide].map((item, index) => (
              <div key={index} className="case-card">
                <div className="case-image-wrapper">
                  <img 
                    src={item.image} 
                    alt={`Caso de ${item.title} - Antes e Depois`} 
                    className="case-image" 
                  />
                </div>
                <div className="case-info">
                  <h4>{item.title}</h4>
                  <p className="p-16">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {caseGroups.length > 1 && (
            <div className="cases-navigation">
              <button className="nav-button prev-button" onClick={prevSlide} aria-label="Slide anterior">
                <ChevronLeft size={24} />
              </button>
              <div className="cases-dots">
                {caseGroups.map((_, index) => (
                  <button
                    key={index}
                    className={`case-dot ${currentSlide === index ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Ir para slide ${index + 1}`}
                  />
                ))}
              </div>
              <button className="nav-button next-button" onClick={nextSlide} aria-label="Próximo slide">
                <ChevronRight size={24} />
              </button>
            </div>
          )}
        </motion.div>

        <motion.div
          variants={fadeIn("up", "tween", 0.6, 1)}
          className="btn-full-width content-center"
          style={{ marginTop: "40px" }}
        >
          <Button variant="primary" size="lg" type="button">Agende sua avaliação</Button>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default CasesSlider;