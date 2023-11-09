import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 480px;
  align-items: center;
  height: 100vh;
  justify-content: center;
  padding : 24px;
`;

export function TestInit() {
  const [displayAlternative, setDisplayAlternative] = useState(false);
  const [count, setCount] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayAlternative(true);

      const countDown = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount === 1) {
            clearInterval(countDown);
            navigate('/testStart');
            return prevCount;
          } else {
            return prevCount - 1;
          }
        });
      }, 1000);

      return () => clearInterval(countDown);
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Container>
      {displayAlternative ? (
        <div>
          <h1>{count}</h1>
        </div>
      ) : (
        <div>
          <h3>간단한 문제를 풀어주세요 !</h3>
          <p>각 문제는 30초</p>
        </div>
      )}
    </Container>
  );
}
