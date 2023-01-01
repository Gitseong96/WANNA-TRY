import AnswerCreator from "./ActionCreator";
import { createReducer } from "@reduxjs/toolkit";



export type AnswerDataType = {
    mood: string;
    age: string;
    money: string;
    ingredient: string;
    bar: number
}

export type InitialStateType = {
    result: AnswerDataType
}

const initialState: InitialStateType = {
    result: {
        mood: "",
        age: "",
        money: "",
        ingredient: "",
        bar: 0,
    }

}

const QuestionReduer = createReducer(initialState, (builder) => {
    builder
        .addCase(AnswerCreator.incrementBarCount, (state) => {
            state.result.bar = state.result.bar + 1
        })
        .addCase(AnswerCreator.decrementBarCount, (state) => {
            state.result.bar = state.result.bar - 1
        })
        .addCase(AnswerCreator.addAnswer, (state, action) => {
            state.result = { ...state.result, ...action.payload.answer }
        })

})

export default QuestionReduer