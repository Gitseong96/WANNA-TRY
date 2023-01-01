import { useCallback, useState } from "react";
import { AnswerType, initialData } from "../redux/Data";
import AnswerCreator, { TypeAnswer } from "../redux/ActionCreator";
import { useSelector, useDispatch } from "react-redux";
export const useQuestion = () => {

    const dispatch = useDispatch();
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
    return { onClickBack, onClickSubmit, answers, answerType, question }
}