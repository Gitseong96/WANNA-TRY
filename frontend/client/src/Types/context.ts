import React from "react";



export interface ContextTypes {

    answerData: AnswerTypeState;
    setAnswerData: React.Dispatch<React.SetStateAction<AnswerTypeState>>
    barcount: number;
    setBarcount: React.Dispatch<React.SetStateAction<number>>
}

export interface AnswerTypeState {
    mood: string;
    age: string;
    money: string;
    ingredient: string;
}
