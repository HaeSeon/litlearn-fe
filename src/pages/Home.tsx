import { Button, Card, Col, Row } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

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
export function Home() {

  const [vocas, setVocas] = useState<Voca[]>()
  const [newses, setNewses] = useState<News[]>()
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
          <h2>피드</h2>
          <Button style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
            onClick={() => { window.open("http://pf.kakao.com/_iExmxoxj", '_self') }}
          >카카오톡으로 받아보기
            <img src="/img/kakao.png" alt="kakao" width={24} />
          </Button>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: "100%"
        }}>
          <h3 style={{
            width: "100%",
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
          }}>당신의 직무에 맞춘 오늘의 어휘 <img src="/img/cookie.png" alt="쿠키" width={24} style={{ marginLeft: "8px" }} /></h3>
        </div>
        <div style={{ overflowX: 'auto', display: "flex", width: "100%", gap: "16px" }}>
          {vocas &&
            vocas.map((voca, index) => (
              <Col key={index}>
                <Card title={voca.word} style={{ minWidth: "140px", fontWeight: 500 }}>
                  {voca.meaning}
                </Card>
              </Col>
            ))}
        </div>
        <div style={{ overflowX: 'auto', display: "flex", width: "100%", gap: "16px" }}>
          <img src="/img/banner1.png" alt="" width={240} />
          <img src="/img/banner2.png" alt="" width={240} />
        </div>

        <h3 style={{
          width: "100%",
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'center',
        }}>관심사, 직무 맞춤 추천 뉴스</h3>
        <div style={{ overflowX: 'auto', display: "flex", width: "100%", gap: "16px" }}>
          {newses &&
            newses.map((news, index) => (
              <Col key={index}>
                <Card title={news.언론사}
                  onClick={() => { window.open(news.주소, '_self') }}
                  style={{ minWidth: "140px", fontWeight: 500, maxWidth: "200px" }}>
                  {news.제목}
                </Card>
              </Col>
            ))}
        </div>
      </Container >
    </div >
  )
}