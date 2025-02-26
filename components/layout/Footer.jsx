'use client'
import Link from "next/link"
import {
  Facebook,
  Twitter,
  Instagram
} from "lucide-react"
import {
  FOOTER_DATA_CONTACT_INFORMATION,
  FOOTER_DATA_LINKS
} from "./data"


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__row">
          <div className="footer__col">
            <div className="footer__col--content">
              <img
                className="footer__col--logo"
                src="/assets/footer/Footer__logo.svg"
                alt="logo"
                loading="lazy"
              />
              <p className="p-18">Há mais de duas décadas, buscamos a melhor qualidade na prestação de serviços e cuidados odontológicos especializados.</p>
            </div>
            <div className="footer__col--content">
              <p className="label-12">Siga nas redes</p>
              <div className="footer__col--content__social-media">
                <Facebook
                  size={30}
                  color="currentColor"
                  style={{ cursor: 'pointer' }}
                />
                <Twitter
                  size={30}
                  color="currentColor"
                  style={{ cursor: 'pointer' }}
                />
                <Instagram
                  size={30}
                  color="currentColor"
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </div>
          </div>

          <div className="footer__col">
            <div className="footer__col--content__links">
              <p className="label-12">Menu</p>
              {FOOTER_DATA_LINKS.map((link, index) => (
                <Link key={index} className="label-14" href={link.value}>
                  {link.link_text}
                </Link>
              ))}
            </div>
          </div>

          <div className="footer__col">
            <p className="label-12">Contato & informações</p>
            {FOOTER_DATA_CONTACT_INFORMATION.map((item, index) => (
              <div key={index} className="footer__col--info-group">
                <img src={item.icon} alt="number" />
                <div>
                  <p className="label-12">{item.label}</p>
                  <p className="p-18">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="footer__row copyright">
          <p className="p-16">&copy; Dra. Taciana Palamoni - All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer