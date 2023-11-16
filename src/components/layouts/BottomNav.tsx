
import { HomeOutlined, SearchOutlined, SnippetsOutlined, UserOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

export const BottomNavigation = () => {
  const navigate = useNavigate();

  const handleButtonClick = (path: string) => {
    navigate(path);
  };

  return (
    <div style={{ position: 'fixed', bottom: 0, width: '100%', display: "flex", justifyContent: "space-evenly", height: "50px", alignItems: 'center', backgroundColor: "white", fontSize: "28px" }}>
      <HomeOutlined width={32} onClick={() => handleButtonClick('/home')} />
      <SearchOutlined onClick={() => { handleButtonClick('/content') }} />
      <img src="/img/logo_btn.png" alt="logo" width={40} height={40} onClick={() => handleButtonClick('/home')} />
      <SnippetsOutlined />
      <UserOutlined onClick={() => handleButtonClick('/testResult')} />

    </div>
  );
};

