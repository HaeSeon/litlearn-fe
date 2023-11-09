import styled from "styled-components";
import { Footer } from "../components/layouts/Footer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 480px;
  align-items : center;
  height : 100dvh;
  justify-content : center;
  padding : 24px;
`
export function Landing() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/testInit');
    }, 1000);

    return () => clearTimeout(timeout);
  }, [navigate]);
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