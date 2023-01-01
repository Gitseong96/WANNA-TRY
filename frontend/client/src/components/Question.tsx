import React, {
  useState,
  useCallback
} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AnswerType } from '../redux/Data';
import { initialData } from '../redux/Data';
import { useDispatch, useSelector } from "react-redux";
import { InitialStateType } from '../redux/AnswerRudux';
import AnswerCreator, { TypeAnswer } from '../redux/ActionCreator';

const Question = () => {
  const dispatch = useDispatch();
  const anwerResult = useSelector((state: InitialStateType) => {
    console.log(state.result)
    return state.result
  })
  // console.log(anwerResult)
  const [question, setQuestion] = useState<string>(initialData.data[0].question)
  const [answerType, setAnswerType] = useState<string>(initialData.data[0].answerType)
  const [answers, setAnswers] = useState<Array<AnswerType>>(initialData.data[0].answer)
  const addAnswer = useCallback((answer: TypeAnswer) => dispatch(AnswerCreator.addAnswer({ answer })), [])
  const incrementBarCount = () => dispatch(AnswerCreator.incrementBarCount({}))
  const decrementBarCount = useCallback(() => dispatch(AnswerCreator.decrementBarCount({})), [])

  const onClickSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { name, value } = e.target as HTMLInputElement;
    if (question === initialData.data[0].question) {
      addAnswer({ [value]: name })
      incrementBarCount();
      setQuestion(initialData.data[1].question);
      setAnswers(initialData.data[1].answer);
      setAnswerType(initialData.data[1].answerType)
    } else if (question === initialData.data[1].question) {
      addAnswer({ [value]: name })
      incrementBarCount();
      setQuestion(initialData.data[2].question);
      setAnswers(initialData.data[2].answer);
      setAnswerType(initialData.data[2].answerType)
    } else if (question === initialData.data[2].question) {
      addAnswer({ [value]: name })
      incrementBarCount();
      setQuestion(initialData.data[3].question);
      setAnswers(initialData.data[3].answer);
      setAnswerType(initialData.data[3].answerType)
    } else if (question === initialData.data[3].question) {
      addAnswer({ [value]: name })
      incrementBarCount();
    }
  };

  const onClickBack = () => {
    if (question === initialData.data[1].question) {
      setQuestion(initialData.data[0].question);
      setAnswers(initialData.data[0].answer);
      setAnswerType(initialData.data[0].answerType)
      decrementBarCount()
    } else if (question === initialData.data[2].question) {
      setQuestion(initialData.data[1].question);
      setAnswers(initialData.data[1].answer);
      setAnswerType(initialData.data[1].answerType)
      decrementBarCount()
    } else if (question === initialData.data[3].question) {
      setQuestion(initialData.data[2].question);
      setAnswers(initialData.data[2].answer);
      setAnswerType(initialData.data[2].answerType)
      decrementBarCount()
    }
  };

  const BackBtn = styled.div`
    cursor: pointer;
    padding: 2rem;
    `;

  const backBtn =
    question !== '나이를 알려주세요.' ? (
      <BackBtn onClick={onClickBack}>
        <img src="../button-back.png" alt="뒤로가기" width={32} />
      </BackBtn>
    ) : (
      false
    );

  const answerBtn = answers.map((answer: any, idx: number) =>
    question !== '오늘 땡기는 종류는 무엇인가요' ? (
      <AnswerButton
        whileHover={{ scale: 1.2 }}
        whileTap={{ borderRadius: '50%' }}
        onClick={onClickSubmit}
        key={`answer+${idx}`}
        value={answerType}
        name={answer.text}
      >
        {answer.text}
      </AnswerButton>
    ) : (
      <Link to="/Result">
        <AnswerButton
          whileHover={{ scale: 1.2 }}
          whileTap={{ borderRadius: '50%' }}
          onClick={onClickSubmit}
          key={`answer+${idx}`}
          value={answer.value}
          name={answer.text}
        >
          {answer.text}
        </AnswerButton>
      </Link>
    ),
  );

  return (
    <Container>
      <QuestionView>
        {backBtn}
        {question}
      </QuestionView>
      <AnswerContainer>{answerBtn}</AnswerContainer>
    </Container>
  );
};

export default Question;

const Container = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
      `;


const QuestionView = styled.div`
        display: flex;
        height: 150px;
        padding-top: 5rem;
        padding-bottom: 4rem;
        justify-content: center;
        align-items: center;
        font-size: 3rem;
        color: #484848;
        border-radius: 10px;
      `;

const AnswerButton = styled(motion.button)`
        width: 10rem;
        height: 6rem;
        font-size: 1.5rem;
        text-align: center;
        border: none;
        border-radius: 2rem;
        background: white;
        margin: 0.5rem;
        &:hover,
        :focus {
          background: whitesmoke;
        }
      `;

const AnswerContainer = styled.div`
        display: flex;
        flex-direction: row;
      `;

