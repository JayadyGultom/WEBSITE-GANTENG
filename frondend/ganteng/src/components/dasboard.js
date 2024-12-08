import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = 'Orang pintar bayar pajak';
  
  useEffect(() => {
    const typingSpeed = 100; // Kecepatan mengetik
    const deletingSpeed = 50; // Kecepatan menghapus
    const pauseTime = 2000; // Jeda sebelum menghapus/mengetik ulang

    const handleTyping = () => {
      setDisplayText(prev => {
        if (!isDeleting && prev === fullText) {
          setTimeout(() => setIsDeleting(true), pauseTime);
          return prev;
        }
        if (isDeleting && prev === '') {
          setTimeout(() => setIsDeleting(false), pauseTime);
          return prev;
        }
        
        if (isDeleting) {
          return prev.slice(0, -1);
        }
        return fullText.slice(0, prev.length + 1);
      });
    };

    const interval = setInterval(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearInterval(interval);
  }, [isDeleting]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="text-center">
        <h1 className="text-6xl font-normal tracking-tight p-5 text-black">
          {displayText}
        </h1>
      </div>
    </div>
  );
};

export default Dashboard;
