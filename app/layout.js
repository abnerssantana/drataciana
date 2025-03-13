import { Navigation, Footer } from "@/components/layout";
import { ScrollButton } from "@/components/elements";
import "../styles/main.scss";

export const metadata = {
  metadataBase: new URL('https://www.drataciana.com.br/'),
  title: 'Dra. Taciana Palamoni - Ortoteen Ortodontia',
  description: 'Clínica especializada em ortodontia e harmonização facial em São José do Rio Preto. Atendimento personalizado com tecnologia avançada.',
  creator: 'Fastlogia',
  keywords: ['ortodontia', 'harmonização facial', 'aparelho', 'ortopedia facial', 'dentes'],
  openGraph: {
    title: 'Dra. Taciana Palamoni - Ortodontia Especializada',
    description: 'Tratamentos ortodônticos com tecnologia avançada e atendimento humanizado.',
    images: [
      {
        url: "/assets/home/hero/Hero__heading.png",
        width: 800,
        height: 600,
        alt: 'Dra. Taciana Palamoni Ortodontia'
      }
    ],
    locale: 'pt_BR',
    type: 'website',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Navigation/>
        <main>
        <ScrollButton/>
          {children}
        </main>
        <Footer/> 
      </body>
    </html>
  )
}
