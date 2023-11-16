import React, { useState, useEffect } from 'react';

function FeedbackComponent() {
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    // 틀렸을 때 showError를 true로 변경하여 이미지를 보여줌
    setShowError(true);

    // 3초 후 showError를 false로 변경하여 이미지를 숨김
    const timeoutId = setTimeout(() => {
      setShowError(false);
    }, 3000);

    // 컴포넌트가 언마운트되면 clearTimeout을 통해 타이머 클리어
    return () => clearTimeout(timeoutId);
  }, []); // []를 빈 배열로 넣어 한 번만 실행되도록 설정

  return (
    <div style={{ textAlign: 'center' }}>
      {showError && (
        <img
          src="/img/error.png"
          alt="Error"
          style={{ maxWidth: '100%', maxHeight: '100%', position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        />
      )}
    </div>
  );
}
