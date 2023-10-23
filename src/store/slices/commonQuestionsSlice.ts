import { createLoadDataAction } from "../generators/actionsGenerator";
import { createDataSlice } from "../generators/reducerGenerator";
import { createDataSelector } from "../generators/selectorGenerator";

export const loadCommonQuestionsData = createLoadDataAction("commonQuestions");
export const CommonQuestionsSlice = createDataSlice("commonQuestions", loadCommonQuestionsData);
export const selectCommonQuestions = createDataSelector("commonQuestions");
