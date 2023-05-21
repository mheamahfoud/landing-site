import  { useState, useEffect } from "react";
import { styled } from "styled-components";
import PropTypes from "prop-types";
import "./SentenceRotator.css";
import Sentence from "./Sentence";

const Container =styled.div`

`;
const SentenceRotator = ({ ...props} ) => {
  const {sentences}=props;
  const [index, setIndex] = useState(0);
  const [currentSentence, setCurrentSentence] = useState(sentences[0]);
  const [fadeState, setFadeState] = useState("fade-in");
  useEffect(() => {
    const intervalId = setInterval(() => {
      setFadeState("fade-out");
      setTimeout(() => {
        setIndex((index + 1) % sentences.length);
        setFadeState("fade-in");
      }, 500);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [index, sentences]);

  useEffect(() => {
    setCurrentSentence(sentences[index]);
  }, [index, sentences]);

  return (
    <div className={`fade-transition ${fadeState}`}>
      <Sentence text={currentSentence} />
    </div>
  );
};

SentenceRotator.propTypes = {
  sentences: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SentenceRotator;
