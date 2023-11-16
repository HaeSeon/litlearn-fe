import styled from "styled-components";
import { Footer } from "../components/layouts/Footer";
import { useEffect, useState } from "react";
import { Button, Modal, message } from "antd";
import { useNavigate } from "react-router-dom";
import { firework } from "../utils";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 480px;
  align-items : start;
  height : 100dvh;
  gap : 16px;
  padding : 24px;
`


const questions = [
  {
    "index": 1,
    "question": "다음이 설명하는 올바른 단어는?",
    "content": `말이나 행동을 미리 준비해 놓는 것을 의미합니다. 대화나 발표에서 사용되며, 사전에 계획된 내용을 토대로 자연스럽게 의사 전달이 이뤄지도록 돕습니다. 효과적인 커뮤니케이션과 자신감 향상에 기여할 수 있습니다.

"발표 전에 잠시 시간을 내어 ____을 통해 중요한 내용을 미리 정리해두면 자연스럽게 발표할 수 있어요."
"인터뷰에서 예상 질문에 대한 답변을 ____하여 자신감 있게 응답할 수 있도록 준비하는 것이 중요합니다."`,
    "options": ["자연어처리", "프롬프팅", "전이학습", "생성형AI", "파인튜닝"],
    "answer": "프롬프팅",
  },
  {
    "index": 2,
    "question": "다음이 설명하는 올바른 단어는?",
    "content": `이것은 너무 풍부하여 정량적으로 설명하기 어려운 정도의 감각이나 감정을 의미합니다.
    
    밤하늘의 별빛은 ____으로, 그 아름다움을 말로 표현하기 어렵습니다.

    예술가의 그림은 색채와 감정이 어우러져 ___한 아름다움을 전합니다.`,
    "options": ["감개무량", "형형색색", "초월", "심안", "무한"],
    "answer": "감개무량",
  },

]
interface Question {
  index: number;
  question: string;
  content: string;
  options: string[];
  answer: string;
  level: number;
}
export function TestVoca() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [time, setTime] = useState(30);
  const [userAnswers, setUserAnswers] = useState<(string | null)[]>([]);
  const [isCorrect, setIsCorrect] = useState()
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();


  const handleAnswerSelection = (selectedAnswer: string) => {
    const updatedAnswers = [...userAnswers]; // 이전 답안의 복사본 생성

    // 현재 문제에 대한 사용자 답안 업데이트
    updatedAnswers[questionIndex] = selectedAnswer.charAt(0);

    // 업데이트된 답안으로 state 업데이트
    setUserAnswers(updatedAnswers);
    console.log(`Question ${questionIndex + 1} Answer:`, selectedAnswer);

    // 답을 체크하여 맞았는지 확인 (true 또는 false)
    const isCorrect = selectedAnswer.charAt(0) === questions[questionIndex].answer;

    // 피드백을 표시하는 로그
    if (selectedAnswer === questions[questionIndex].answer) {
      firework()
    } else {
      message.error("오답입니다. ")
    }

    // 다음 질문이 남아있는 경우
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1); // 다음 문제로 이동

    } else { // 마지막 질문인 경우
      console.log('Quiz completed');
      console.log('User Answers:', updatedAnswers); // 업데이트된 답안 로깅
      navigate('/testResult', { state: { userAnswers: updatedAnswers, questions } }); // 결과 페이지로 이동
    }
  };

  return (
    <div>
      <Container>
        <h2 style={{}}>Content </h2>
        <h2 style={{
          width: "100%",
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'center',
          margin: 0
        }}><img src="/img/voca.png" alt="vaca" width={24} />어휘력</h2>
        <div style={{
          backgroundImage: 'url(/img/voca_bg.png)', padding: "16px", backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          borderRadius: "10px"
        }}>

          <h3 style={{ textAlign: "left" }}>{questions[questionIndex].question}</h3>
          <div style={{ textAlign: "center", padding: "24px", lineHeight: "1.4", whiteSpace: "pre-wrap" }}>
            {questions[questionIndex].content}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
            {questions[questionIndex].options.map((option, index) => (
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
        </div>

      </Container >
    </div >
  );
}