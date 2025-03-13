"use client"
import React from 'react'
import Link from 'next/link'

const Button = (props) => {
  const classNames = `btn btn--${props.variant} btn--${props.size}`;
  
  // WhatsApp URL for appointment buttons
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5517981141014&text=Ol%C3%A1,%20eu%20gostaria%20de%20agendar%20uma%20Avalia%C3%A7%C3%A3o!";
  
  // If it has a whatsapp prop, render as a link
  if (props.whatsapp) {
    return (
      <Link 
        href={whatsappUrl} 
        className={classNames}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.icon ? props.icon : ""} {props.children}
      </Link>
    )
  }

  // Regular button
  return (
    <button 
    type={props.type} 
    className={classNames}
    onClick={props.onClick}
    disabled={props.disabled}
    >
     {props.icon ? props.icon : ""} {props.children}
    </button>
  )
}

export default Button