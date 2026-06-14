import { useEffect, useState } from 'react';

export default function useTypewriter(words, typingSpeed = 70, deletingSpeed = 40, pauseMs = 1800) {
  const [displayed, setDisplayed] = useState('');
  const [wordIdx, setWordIdx]     = useState(0);
  const [charIdx, setCharIdx]     = useState(0);
  const [typing, setTyping]       = useState(true);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout;

    if (typing) {
      if (charIdx < current.length) {
        timeout = setTimeout(() => setCharIdx(i => i + 1), typingSpeed);
      } else {
        timeout = setTimeout(() => setTyping(false), pauseMs);
      }
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(() => setCharIdx(i => i - 1), deletingSpeed);
      } else {
        setTyping(true);
        setWordIdx(i => (i + 1) % words.length);
      }
    }

    setDisplayed(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, typing, wordIdx, words, typingSpeed, deletingSpeed, pauseMs]);

  return displayed;
}
