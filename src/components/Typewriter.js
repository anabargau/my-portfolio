import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Typewriter(props) {
  const { attributeArray } = props;
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = attributeArray[currentWordIndex];
      const currentWordArray = Array.from(currentWord);

      if (isDeleting) {
        setDisplayedText((prev) => Array.from(prev).slice(0, -1).join(""));
        setSpeed(100);

        if (!displayedText.length) {
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % attributeArray.length);
          setSpeed(150);
        }
      } else {
        setDisplayedText((prev) =>
          currentWordArray.slice(0, Array.from(prev).length + 1).join("")
        );

        if (displayedText === currentWord) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      }
    };

    const typingTimeout = setTimeout(handleTyping, speed);
    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, speed, currentWordIndex]);

  return (
    <span className="typewriter-text">
      <span className="neon-pink">{displayedText}</span>
      <motion.span
        className="blinking-cursor"
        animate={{ opacity: [1, 0, 1] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        |
      </motion.span>
    </span>
  );
}
