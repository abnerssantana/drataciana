import { 
  Services, 
  DentalEmergency, 
  Features, 
  Experts, 
  Testimonials, 
  HeroHeading,
  BlogPostRow
} from '@/components/home'
import BeforeAfterSlider from '../components/BeforeAfterSlider';

export default function Home() {
  return (
    <>
      <HeroHeading/>
      <Services/>
      <DentalEmergency/>
      <Features/>
      <Experts/>
      <BeforeAfterSlider />
      <Testimonials/>
      <BlogPostRow/>
    </>
  )
}
