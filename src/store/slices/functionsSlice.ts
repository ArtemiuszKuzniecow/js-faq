import { createLoadDataAction } from "../generators/actionsGenerator";
import { createDataSlice } from "../generators/reducerGenerator";
import { createDataSelector } from "../generators/selectorGenerator";

export const loadFunctionsData = createLoadDataAction("functions");
export const FunctionsSlice = createDataSlice("functions", loadFunctionsData);
export const selectFunctions = createDataSelector("functions");
