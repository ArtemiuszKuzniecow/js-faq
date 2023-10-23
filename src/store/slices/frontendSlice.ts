import { createLoadDataAction } from "../generators/actionsGenerator";
import { createDataSlice } from "../generators/reducerGenerator";
import { createDataSelector } from "../generators/selectorGenerator";

export const loadFrontendData = createLoadDataAction("frontend");
export const FrontendSlice = createDataSlice("frontend", loadFrontendData);
export const selectFrontend = createDataSelector("frontend");
