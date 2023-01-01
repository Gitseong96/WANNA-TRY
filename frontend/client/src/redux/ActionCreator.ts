import { createAction } from "@reduxjs/toolkit";


export interface TypeAnswer {
    mood?: string;
    age?: string;
    money?: string;
    ingredient?: string;
}

const AnswerCreator = {
    addAnswer: createAction<{ answer: TypeAnswer }>("addAnswer"),
    incrementBarCount: createAction<{}>("incrementBarCount"),
    decrementBarCount: createAction<{}>("decrementBarCount"),
    // changeQuestion: createAction<{ question: string[] }>("chnageQuestion")

}

export default AnswerCreator