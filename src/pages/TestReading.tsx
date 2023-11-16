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
    "options": ["영국의 대표적인 축제 중 하나이다.", "필리핀과도 손을 잡고 우수한 젊은 광고인을 선발한다.", "역사적으로 알아야 할 광고 컨퍼런스 중 하나이다.", "챗 GPT를 활용해 데이터 셋을 구축한다.", "젊은 광고인을 선발하지 않으므로, 발전한다."],
    "answer": "필리핀과도 손을 잡고 우수한 젊은 광고인을 선발한다.",
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
export function TestReading() {
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
        }}><img src="/img/read.png" alt="vaca" width={24} style={{
          marginRight: "8px"
        }} />독해력</h2>
        <p>* 링크에 들어가 기사를 읽고 문제를 푸시오. *</p>
        <div style={{
          padding: "16px",
          borderRadius: "10px"
        }}>

          <img src="/img/news1.png" alt="" style={{ marginBottom: "16px" }} onClick={() => { window.open("https://www.the-pr.co.kr/news/articleView.html?idxno=50871", '_self') }} />
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
            {questions[questionIndex].options.map((option, index) => (
              <Button
                key={index}
                style={{
                  width: "100%",
                  height: "50px",
                  fontSize: "13px",
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