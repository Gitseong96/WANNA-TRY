import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { InitialStateType } from '../redux/AnswerRudux';

function ProgressBar() {
  const bar = useSelector((state: InitialStateType) => state.result.bar)
  // const bar = anwerResult.result.bar
  return (
    <Container>
      <Progress width={(bar / 4) * 100 + '%'} />
    </Container>
  );
}

interface StyledProps {
  width: string
}

const Container = styled.div`
  display: flex;
  width: 40rem;
  height: 1.5rem;
  background-color: #ffffff52;
  align-items: center;
  border-radius: 20px;
`;

const Progress = styled.div<StyledProps>`
  background-color: white;
  width: ${(props) => props.width};
  height: 100%;
  transition: width 1s;
  border-radius: 20px;
`;

export default ProgressBar;
