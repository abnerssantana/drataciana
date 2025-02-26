import React from "react"
import { Button } from "../elements"
import Image from "next/image"


const CTAgroup = (props) => {

  // variants
  // btn-left
  // btn-right
  // btn-only
  
  const classNames =`button-groupx button-groupx--${props.variant}`

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
          <p className="p-16">17 98114-1014</p>
        </div>
      </div>
      <Button size="lg" variant={props.btnVariant} type="button">Marque sua consulta</Button>
    </div>
  )
}

export default CTAgroup

