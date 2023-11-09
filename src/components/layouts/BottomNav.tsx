
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

export const BottomNavigation = () => {
  const navigate = useNavigate();

  const handleButtonClick = (path: string) => {
    navigate(path);
  };

  return (
    <div style={{ position: 'fixed', bottom: 0, width: '100%', display: "flex", justifyContent: "center" }}>
      <Button onClick={() => handleButtonClick('/testResult')}>MyPage</Button>
      <Button onClick={() => handleButtonClick('/home')}>Home</Button>
      <Button >Profile</Button>
    </div>
  );
};

