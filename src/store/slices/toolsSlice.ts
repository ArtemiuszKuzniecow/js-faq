import { createLoadDataAction } from "../generators/actionsGenerator";
import { createDataSlice } from "../generators/reducerGenerator";
import { createDataSelector } from "../generators/selectorGenerator";

export const loadToolsData = createLoadDataAction("tools");
export const ToolsSlice = createDataSlice("tools", loadToolsData);
export const selectTools = createDataSelector("tools");
