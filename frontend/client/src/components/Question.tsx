import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useQuestion } from '../Hooks/QuestionHook';
const Question = () => {
  const { onClickBack, onClickSubmit, answers, answerType, question } = useQuestion()
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

