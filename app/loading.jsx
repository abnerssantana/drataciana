import { Container } from "@/components/layout"
import { ThreeDotsLoading } from "@/components/common"

const Loading = () => {
  return (
    <Container tag="section" variant="lg">
      <ThreeDotsLoading title="Carregando"/>
    </Container>
  )
}

export default Loading