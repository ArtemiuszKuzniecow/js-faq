import { createLoadDataAction } from "../generators/actionsGenerator";
import { createDataSlice } from "../generators/reducerGenerator";
import { createDataSelector } from "../generators/selectorGenerator";

export const loadReactData = createLoadDataAction("react");
export const ReactSlice = createDataSlice("react", loadReactData);
export const selectReact = createDataSelector("react");
