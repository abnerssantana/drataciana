// Atualização para o components/layout/Footer.jsx
'use client'
import {
  Facebook,
  Twitter,
  Instagram,
  Phone,
  Clock,
  MapPin
} from "lucide-react"
import Link from "next/link"
import {
  FOOTER_DATA_CONTACT_INFORMATION,
} from "./data"

const iconMap = {
  "Whastapp": Phone,
  "Horário de funcionamento": Clock,
  "Onde estamos": MapPin
}

const Footer = () => {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5517981141014&text=Ol%C3%A1,%20eu%20gostaria%20de%20agendar%20uma%20Avalia%C3%A7%C3%A3o!";
  
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__row">
          <div className="footer__col">
            <div className="footer__col--content">
              <img
                className="footer__col--logo"
                src="/assets/footer/Footer__logo.png"
                alt="logo"
                loading="lazy"
              />
              <p className="p-18">Há mais de duas décadas, buscamos a melhor qualidade na prestação de serviços e cuidados odontológicos especializados.</p>
            </div>
            <div className="footer__col--content">
              <p className="label-12">Siga nas redes</p>
              <div className="footer__col--content__social-media">
                <Link href="#" className="footer__social-icon">
                  <Facebook size={24} />
                </Link>
                <Link href="#" className="footer__social-icon">
                  <Instagram size={24} />
                </Link>
                <Link href="#" className="footer__social-icon">
                  <Twitter size={24} />
                </Link>
              </div>
            </div>
          </div>

          <div className="footer__col">
            <p className="label-12">Contato & informações</p>
            <div className="footer__contact-list">
              {FOOTER_DATA_CONTACT_INFORMATION.map((item, index) => {
                const IconComponent = iconMap[item.label] || Phone;
                return (
                  <div key={index} className="footer__col--info-group">
                    <div className="footer__contact-icon">
                      <IconComponent size={20} />
                    </div>
                    <div className="footer__contact-text">
                      <p className="label-12">{item.label}</p>
                      {item.whatsapp ? (
                        <Link 
                          href={whatsappUrl} 
                          className="p-18"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.value}
                        </Link>
                      ) : (
                        <p className="p-18">{item.value}</p>
                      )}
                      {item.value2 && <p className="p-18">{item.value2}</p>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="footer__row copyright">
          <div className="footer__copyright-wrapper">
            <p className="p-16">&copy; Dra. Taciana Palamoni - Todos os direitos reservados</p>
            <p className="p-16 footer__developed-by">Desenvolvido por <a href="#" className="footer__developer-link">Fastlogia</a></p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer