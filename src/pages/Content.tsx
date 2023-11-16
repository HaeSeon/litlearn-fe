import { Button, Card, Col, Row } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { BottomNavigation } from "../components/layouts/BottomNav";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 480px;
  align-items : center;
  min-height : 100dvh;
  padding : 24px;
  gap : 16px;
`

const CustomCard = styled(Card)`
  width: 200px; /* 카드의 최대 너비 설정 */
  overflow-x: auto; /* 가로 스크롤 추가 */

`;
const buttonStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

interface Voca {
  word: string
  meaning: string
  domain?: string
}

interface News {
  일자: string,
  언론사: string,
  제목: string,
  주소: string,
}
export function Content() {

  const [vocas, setVocas] = useState<Voca[]>()
  const [newses, setNewses] = useState<News[]>()
  const navigate = useNavigate()
  useEffect(() => {
    axios.post("http://localhost:8000/smililarity/", {
      email: "haesummy@gmail.com",
    }).then((res) => {
      console.log(res.data)
      setVocas(res.data)
    })

    axios.post("http://localhost:8000/news/smililarity/", {
      email: "haesummy@gmail.com",
    }).then((res) => {
      console.log(res.data)
      setNewses(res.data)
    })
  }, [])

  return (
    <div>
      <Container>
        <div style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
          <h2>Content</h2>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: "column",
          alignItems: 'center',
          width: "100%"
        }}>
          <h2 style={{
            width: "100%",
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
          }}><img src="/img/voca.png" alt="vaca" width={24} style={{ marginLeft: "8px" }} />어휘력</h2>

          <div style={{
            width: "100%",
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            margin: 0
          }}> 어휘력이 어느정도 되는걸까 ?</div>
        </div>
        <div style={{ overflowX: 'auto', display: "flex", width: "100%", gap: "16px" }}>
          <img src="/img/job.png" alt="vaca" width={150} style={{ marginLeft: "8px" }} onClick={() => { navigate('/test/voca?type=job') }} />
          <img src="/img/enterest.png" alt="vaca" width={150} style={{ marginLeft: "8px" }} />

        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: "column",
          alignItems: 'center',
          width: "100%"
        }}>
          <h2 style={{
            width: "100%",
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
          }}><img src="/img/voca.png" alt="vaca" width={24} style={{ marginLeft: "8px" }} />독해력</h2>

          <div style={{
            width: "100%",
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            margin: 0
          }}> 문해력의 기본 독해력을 높여보자</div>
        </div>
        <div style={{ overflowX: 'auto', display: "flex", width: "100%", gap: "16px" }}>
          <img src="/img/news1.png" alt="vaca" width={150} style={{ marginLeft: "8px" }} onClick={() => { navigate('/test/reading') }} />
          <img src="/img/news2.png" alt="vaca" width={150} style={{ marginLeft: "8px" }} onClick={() => { navigate('/test/reading') }} />
          <img src="/img/news3.png" alt="vaca" width={150} style={{ marginLeft: "8px" }} onClick={() => { navigate('/test/reading') }} />

        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: "column",
          alignItems: 'center',
          width: "100%"
        }}>
          <h2 style={{
            width: "100%",
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
          }}><img src="/img/voca.png" alt="vaca" width={24} style={{ marginLeft: "8px" }} />문장 만들기</h2>

          <div style={{
            width: "100%",
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            margin: 0
          }}> 내가 쓴 문장은 좋은 글 일까 ?</div>
        </div>
        <div style={{ overflowX: 'auto', display: "flex", width: "100%", gap: "16px" }}>
          <img src="/img/short.png" alt="vaca" width={150} style={{ marginLeft: "8px" }} onClick={() => { navigate('/test/writing') }} />
          <img src="/img/long.png" alt="vaca" width={150} style={{ marginLeft: "8px" }} onClick={() => { navigate('/test/writing') }} />
          <img src="/img/write_image.png" alt="vaca" width={150} style={{ marginLeft: "8px" }} onClick={() => { navigate('/test/writing') }} />
        </div>


        <BottomNavigation />
      </Container >
    </div >
  )
}