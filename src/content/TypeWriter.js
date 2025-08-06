import React, { useState, useEffect } from 'react';

const TypeWriter = ({ words, typingSpeed = 150, deletingSpeed = 50, pauseTime = 1000 }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      if (charIndex > 0) {
        setTimeout(() => {
          setText(currentWord.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setWordIndex((wordIndex + 1) % words.length);
      }
    } else {
      if (charIndex < currentWord.length) {
        setTimeout(() => {
          setText(currentWord.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, typingSpeed);
      } else {
        setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    }
  }, [text, isDeleting, charIndex, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <p className='date-typing' style={{ fontFamily: 'monospace !important' }}>
      {text}
      <span style={{ borderRight: '2px solid rgba(247, 246, 225, 0.79)', paddingRight: '2px' }}>&nbsp;</span>
    </p>
  );
};

export default TypeWriter