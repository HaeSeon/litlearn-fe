import styled from "styled-components";
import { Button } from 'antd'
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/layouts/Footer";
import { useState } from "react";
import { LeftOutlined } from "@ant-design/icons";
import axios from 'axios';


const interests = [
  "📚책/글",
  "🎤음악/악기",
  "✈아웃도어/여행",
  "🎭문화/공연/축제",
  "⚽운동/스포츠",
  "🧶공예/만들기",
  "💃댄스",
  "👨‍🦼봉사",
  "👬사교",
  "🚗차",
  "📷사진/영상",
  "🎲게임/오락",
  "🍳요리/제조",
  "🐶반려동물",
  "🤍자유주제"
];

const jobCategories = [
  "농업, 임업, 어업",
  "광업 및 건설",
  "제조업",
  "거래 및 숙박, 음식점",
  "운수 및 창고",
  "정보통신",
  "금융 및 보험",
  "부동산 및 임대",
  "사업 시설 관리",
  "전문 및 과학 기술 서비스",
  "교육 및 교육 서비스",
  "보건 및 사회복지",
  "문화, 예술, 스포츠",
  "IT",
  "기타 서비스"
];

const InterestWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding : 24px;
`;

const InterestButton = styled(Button)`
  margin: 8px;
  width: fit-content;
`;
const HorizontalFlex = styled.div`
  display: flex;
  flex-wrap: wrap; /* 너비를 초과하는 경우 자동으로 줄 바꿈합니다 */
`;
export function InterestSelect() {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedJobs, setSelectedJobs] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleInterestSelect = (interest: string) => {
    // 선택된 관심사를 업데이트
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter(item => item !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };


  const handleDomainSelect = (domain: string) => {
    // 선택된 관심사를 업데이트
    if (selectedJobs.includes(domain)) {
      setSelectedJobs(selectedJobs.filter(item => item !== domain));
    } else {
      setSelectedJobs([...selectedJobs, domain]);
    }
  };

  const handleSave = () => {
    // 선택된 관심사를 저장하는 로직
    console.log("Selected Interests: ", selectedInterests, selectedJobs);

    // 서버에 데이터를 전송
    const apiUrl = "http://localhost:8000/user/add_info/";
    axios.post(apiUrl, {
      email: "haesummy@gmail.com", // 사용자 이메일 데이터 추가
      interests: selectedInterests,
      domain: selectedJobs,
    })
      .then((response: any) => {
        console.log("Response from server:", response.data);
        // 성공적으로 전송되었을 때의 로직 구현
        navigate("/testInit");
      })

  };

  return (
    <MainContainer>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Button type="text" onClick={() => navigate(-1)}><LeftOutlined /></Button>
        <h3>Litlearn</h3>
        <Button type="text" onClick={handleSave} style={{ fontWeight: 700 }}>저장</Button>
      </div>
      <h3>상세 관심사 선택</h3>
      <HorizontalFlex>
        {interests.map((interest, index) => (
          <InterestButton
            key={index}
            type={selectedInterests.includes(interest) ? "primary" : "default"}
            onClick={() => handleInterestSelect(interest)}
            style={{ minWidth: `${interest.length * 8}px` }} // 글자 길이에 따라 버튼 너비를 동적으로 설정합니다
          >
            {interest}
          </InterestButton>
        ))}
      </HorizontalFlex>
      <h3>직업군 분류</h3>
      <HorizontalFlex>
        {jobCategories.map((job, index) => (
          <InterestButton
            key={index}
            type={selectedJobs.includes(job) ? "primary" : "default"}
            onClick={() => handleDomainSelect(job)}
            style={{ minWidth: `${job.length * 8}px` }}
          >
            {job}
          </InterestButton>
        ))}
      </HorizontalFlex>
      <Footer />
    </MainContainer>
  )
}