import React, { useEffect, useState } from 'react';

const Progress = () => {
  const [progressHeight, setProgressHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollHeight = document.documentElement.scrollHeight - windowHeight;
      const scrollTop = window.scrollY;
      const scrollPercent = (scrollTop / scrollHeight) * 100;
      setProgressHeight(scrollPercent);
    };

    // Add the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs once

  return (
    <div>
      <div style={{ height: `${progressHeight}%`, width: '5px', backgroundColor: 'black', position: 'fixed', top: '0', left: '50%', transform: 'translateX(-50%)' }}></div>
      {/* Other components or content */}
    </div>
  );
};

export default Progress;
