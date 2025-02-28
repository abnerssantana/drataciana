import { 
  Services, 
  DentalEmergency, 
  Features, 
  Experts, 
  Testimonials, 
  HeroHeading,
  BlogPostRow
} from '@/components/home'

export default function Home() {
  return (
    <>
      <HeroHeading/>
      <Services/>
      <DentalEmergency/>
      <Features/>
      <Experts/>
      <Testimonials/>
      <BlogPostRow/>
    </>
  )
}
