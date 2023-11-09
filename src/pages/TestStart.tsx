import styled from "styled-components";
import { Footer } from "../components/layouts/Footer";
import { useEffect, useState } from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 480px;
  align-items : start;
  height : 100dvh;
  gap : 16px
`
const questions = [
  {
    "index": 1,
    "question": "자연어처리 기술의 미래적인 도전은?",
    "content": "자연어처리 기술은 계속해서 발전하고 있습니다. 머신러닝과 딥러닝 기술의 발전으로 인해 더 복잡한 자연어 이해가 가능해지고 있습니다. 그러나 아직도 언어의 복잡성, 다의성, 그리고 문맥을 완벽히 이해하는 것은 도전적인 과제입니다. 또한, 데이터의 질과 양, 인간 지식의 획득 등 여러 도전에 직면하고 있으며, 이를 극복하기 위해 지속적인 연구와 혁신이 요구됩니다.",
    "options": ["a. 데이터의 질과 양 사이의 상관관계", "b. 딥러닝의 발전과 머신러닝의 적용", "c. 언어의 복잡성과 다의성", "d. 자연어 이해의 증가", "e. 기술의 지속적인 혁신과 발전"],
    "answer": "c",
    "level": 5
  },
  {
    "index": 2,
    "question": "자연어처리의 응용 분야는 다음 중 어디에 주로 사용되나요?",
    "content": "자연어처리 기술은 다양한 분야에 활용됩니다. 인공지능 비서, 챗봇, 자동 번역 시스템, 문서 분류 및 요약, 음성 인식 시스템 등이 그 예시입니다. 이 기술은 비즈니스, 의료, 교육, 소셜 미디어 등 다양한 분야에서 활발하게 사용되며, 데이터의 양이 많아지면서 더욱 정확한 처리와 분석이 가능해지고 있습니다.",
    "options": ["a. 바이러스 백신 연구", "b. 통신 및 네트워크 보안 기술", "c. 교통 및 도로 안전 기술", "d. 온라인 교육 및 학습 플랫폼", "e. 농업과 관련된 자동화 기술"],
    "answer": "d",
    "level": 4,
  },
  {
    "index": 3,
    "question": "법의 종류에 대한 다음 중 어떤 설명이 옳은가요?",
    "content": "법은 여러 종류가 있습니다. 형법은 범죄와 처벌에 관한 법입니다. 민법은 사적인 관계와 계약, 소유권 등을 다룹니다. 헌법은 정부의 구조와 권한을 정합니다. 관리법은 행정 부처가 그들의 권리와 의무를 규정합니다. 각각의 법은 우리의 일상생활과 근로, 교육, 건강, 환경 등에 영향을 미칩니다.",
    "options": ["a. 형법은 행정 부처의 권리와 의무를 다룬다.", "b. 헌법은 사적인 관계와 계약에 관련이 있다.", "c. 관리법은 사회 질서를 유지하기 위한 법이다.", "d. 민법은 정부의 구조와 권한을 규정하는 법이다.", "e. 형법은 범죄와 처벌에 관한 법이다."],
    "answer": "e",
    "level": 2
  },
  {
    "index": 4,
    "question": "시장경제에 대한 다음 설명 중 옳은 것은 무엇인가요?",
    "content": "시장경제는 자본주의 체제의 한 형태입니다. 이 시스템에서는 기업과 소비자들이 자유롭게 거래를 하며, 가격은 공급과 수요에 의해 결정됩니다. 정부 개입이 적고 시장이 경제를 주도합니다. 이것은 소유권과 자유로운 경쟁을 중요시하는 시스템입니다.",
    "options": ["a. 가격은 정부의 결정에 의해 결정된다.", "b. 소비자와 기업 간의 거래가 없다.", "c. 공급과 수요에 의해 가격이 결정된다.", "d. 정부의 개입이 매우 많다.", "e. 경쟁과 소유권이 중요하지 않다."],
    "answer": "c",
    "level": 1
  },
  {
    "index": 5,
    "question": "세계사란 무엇을 아우르는 개념인가요?",
    "content": "세계사는 인류의 모든 지역에서 벌어진 다양한 정치, 경제, 문화, 종교, 과학, 기술 및 사회적 사건들을 아우르는 폭넓은 개념입니다. 이는 우리가 현재와 미래를 더 깊이 이해하고 현재의 현상이 어떻게 발전해 왔는지를 파악하는 데 중요한 통찰력을 제공합니다. 이러한 과거의 사건과 상호작용을 이해함으로써 우리는 오늘날의 사회와 세계적인 현안을 파악하고 미래를 대비하는 데 도움이 됩니다.",
    "options": ["a. 현재와 미래에 관한 예측", "b. 인류의 다양한 지역에서 일어난 사건들", "c. 과거의 사건들만을 포함", "d. 특정 국가에서 일어난 사건들", "e. 정치와 경제에 대한 이해"],
    "answer": "b",
    "level": 3,
  }
]
interface Question {
  index: number;
  question: string;
  content: string;
  options: string[];
  answer: string;
  level: number;
}
export function TestStart() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [time, setTime] = useState(10);
  const [userAnswers, setUserAnswers] = useState<(string | null)[]>([]);
  const navigate = useNavigate();
  let timer: NodeJS.Timeout;
  useEffect(() => {
    const timer = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
      } else {
        if (questionIndex < questions.length - 1) {
          setQuestionIndex(questionIndex + 1);
          setTime(10);
          setUserAnswers((prevAnswers) => [...prevAnswers, null]);
        } else {
          clearInterval(timer);
          console.log('Quiz completed');
          console.log('User Answers:', userAnswers);
          navigate('/testResult', { state: { userAnswers, questions } });
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [time, questionIndex, userAnswers]);


  const handleAnswerSelection = (selectedAnswer: string) => {
    const updatedAnswers = [...userAnswers]; // 이전 답안의 복사본 생성

    // 현재 문제에 대한 사용자 답안 업데이트
    updatedAnswers[questionIndex] = selectedAnswer;

    // 업데이트된 답안으로 state 업데이트
    setUserAnswers(updatedAnswers);
    console.log(`Question ${questionIndex + 1} Answer:`, selectedAnswer);

    // 다음 질문이 남아있는 경우
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1); // 다음 문제로 이동
      setTime(10); // 시간 초기화
    } else { // 마지막 질문인 경우
      clearInterval(timer); // 타이머 정지
      console.log('Quiz completed');
      console.log('User Answers:', updatedAnswers); // 업데이트된 답안 로깅
      navigate('/testResult', { state: { userAnswers: updatedAnswers, questions } }); // 결과 페이지로 이동
    }
  };
  const { question, content, options } = questions[questionIndex];


  return (
    <div>
      <Container>
        <h1 style={{ textAlign: "left" }}>Question {questionIndex + 1}</h1>
        <h1 style={{ textAlign: "left" }}>{question}</h1>
        <div style={{ textAlign: "right", width: "100%" }}>제한시간 | {time} 초</div>
        <div style={{ textAlign: "center", padding: "24px", backgroundColor: "#F6F6F6", borderRadius: "24px", lineHeight: "1.4" }}>{content}</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
          {options.map((option, index) => (
            <Button
              key={index}
              style={{
                width: "100%",
                height: "50px",
                borderRadius: "24px",
                fontWeight: 600,
              }}
              onClick={() => handleAnswerSelection(option)}
            >
              {option}
            </Button>
          ))}
        </div>
      </Container>
      {/* <Footer /> */}
    </div>
  );
}