import styled from "styled-components";
import { Footer } from "../components/layouts/Footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 480px;
  align-items : center;
  height : 100dvh;
  justify-content : center;
`
export function Landing() {

  return (
    <div>
      <Container>

        <img src="/img/logo.png" alt="" width={"32px"} style={{ margin: "24px" }} />
        <h3>Litlearn</h3>

      </Container>
      {/* <Footer /> */}
    </div>
  )
}