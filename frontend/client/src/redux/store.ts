import { configureStore } from "@reduxjs/toolkit";
import QuestionReduer from "./AnswerRudux";

const AppStore = configureStore({ reducer: QuestionReduer });

export default AppStore;