import React from "react"
import { Button } from "../elements"
import Image from "next/image"
import Link from "next/link"

const CTAgroup = (props) => {
  // WhatsApp URL
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5517981141014&text=Ol%C3%A1,%20eu%20gostaria%20de%20agendar%20uma%20Avalia%C3%A7%C3%A3o!";
  
  // variants
  // btn-left
  // btn-right
  // btn-only
  
  const classNames = `button-groupx button-groupx--${props.variant}`

  return (
    <div className={classNames}>
      <div className={`button-groupx--${props.variant}__wrapper`} >
        <div className={`button-groupx--${props.variant}__wrapper--icon`}>
          <Image 
          src={props.image} 
          height={64} 
          width={64} 
          alt="24h Fale Conosco"
          />
        </div>
        <div className={`button-groupx--${props.variant}__wrapper--text`}>
          <p className="label-12">Fale Conosco</p>
          <Link 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-16"
          >
            17 98114-1014
          </Link>
        </div>
      </div>
      <Link 
        href={whatsappUrl} 
        className={`btn btn--${props.btnVariant} btn--lg`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Marque sua consulta
      </Link>
    </div>
  )
}

export default CTAgroup