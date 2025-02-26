import React from 'react'
import Link from "next/link";

const NavLogo = () => {
  return (
    <Link href={"/"} title="logo" className="nav__logo">
      <picture>
        <source 
        media="(max-width: 969px)" 
        srcSet="/assets/logo/logo.webp" 
        loading="lazy"
        />
        <source 
        media="(min-width: 970px)" 
        srcSet="/assets/logo/logo.webp" 
        loading="lazy"
        />
        <img 
        src="/asset/logo.png" 
        alt="logo" 
        title="Back to homepage"
        />
      </picture>
    </Link>
  )
}

export default NavLogo