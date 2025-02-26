"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Container } from "../layout"
import { TESTIMONIALS } from "@/utils/data"
import { motion } from "framer-motion"
import { fadeIn, textVariant } from "@/utils/motions";
import { MotionRow } from "../common/motion/MotionBlog";
import { ArrowLeft, ArrowRight } from "lucide-react";

const TestimonialCard = (props) => {
  const totalStars = 5;
  const activeStars = props.rating;

  return (
    <div className="testimonial">
      <div className="testimonial__wrapper">
        <div className="testimonial__wrapper--image-wrap">
          <Image src={props.image} alt={props.name} height={80} width={80} />
        </div>
        <div className="testimonial__wrapper--body">
          <h5>{props.name}</h5>
          <p className="p-16">{props.text}</p>

          <div className="testimonial__wrapper--body_rating">
            {/* create a new array with the totalStars and render what stars are 'active' */}
            {[...new Array(totalStars)].map((arr, index) => {
              return index < activeStars ?
                <Image key={index} src="/assets/icons/star_filled.svg" width={24} height={24} alt="filled star" />
                : <Image key={index} src="/assets/icons/star_empty.svg" width={24} height={24} alt="empty star" />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

const Testimonials = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const testimonialsPerPage = 3;
  
  // Update isMobile state on window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 970);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener
    window.addEventListener("resize", checkMobile);
    
    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  
  // Calculate pagination
  const indexOfLastTestimonial = currentPage * testimonialsPerPage;
  const indexOfFirstTestimonial = indexOfLastTestimonial - testimonialsPerPage;
  const currentTestimonials = TESTIMONIALS.slice(indexOfFirstTestimonial, indexOfLastTestimonial);
  const totalPages = Math.ceil(TESTIMONIALS.length / testimonialsPerPage);
  
  // Handle pagination
  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };
  
  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };
  
  // Use simpler animation for mobile
  const cardAnimation = isMobile 
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.3 } } }
    : fadeIn("up", "tween", 0.5, 1);

  return (
    <Container tag="section" variant="xxl" className="testimonials">
      <MotionRow
        className="testimonials__wrapper"
      >
        <div className="SectionWTextOnly">
          <div className="SectionWTextOnly__row rowPosition-left">
            <div className="SectionWTextOnly__row--col__heading">
              <motion.p variants={textVariant(0.4)} className="label-12">O que nossos pacientes dizem</motion.p>
              <motion.h2 variants={textVariant(0.4)}>Sorrisos que falam por nós!</motion.h2>
            </div>

            <div className="SectionWTextOnly__row--col__text">
              <motion.p variants={textVariant(0.4)} className="p-18">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts</motion.p>
            </div>
          </div>
        </div>

        <motion.div
          variants={cardAnimation}
          className="testimonials__card-group"
        >
          {currentTestimonials.map((item, index) => (
            <TestimonialCard
              key={item.id}
              name={item.name}
              image={item.image}
              rating={item.rating}
              text={item.text}
            />
          ))}
        </motion.div>
        
        {totalPages > 1 && (
          <div className="testimonials__pagination">
            <button 
              onClick={handlePrevPage} 
              disabled={currentPage === 1}
              className={`testimonials__pagination-btn ${currentPage === 1 ? 'testimonials__pagination-btn--disabled' : ''}`}
            >
              <ArrowLeft />
            </button>
            <span className="testimonials__pagination-text">
              {currentPage} / {totalPages}
            </span>
            <button 
              onClick={handleNextPage} 
              disabled={currentPage === totalPages}
              className={`testimonials__pagination-btn ${currentPage === totalPages ? 'testimonials__pagination-btn--disabled' : ''}`}
            >
              <ArrowRight />
            </button>
          </div>
        )}
      </MotionRow>
    </Container>
  )
}

export default Testimonials