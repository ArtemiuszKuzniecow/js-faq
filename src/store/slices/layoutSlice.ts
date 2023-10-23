import { createLoadDataAction } from "../generators/actionsGenerator";
import { createDataSlice } from "../generators/reducerGenerator";
import { createDataSelector } from "../generators/selectorGenerator";

export const loadLayoutData = createLoadDataAction("layout");
export const LayoutSlice = createDataSlice("layout", loadLayoutData);
export const selectLayout = createDataSelector("layout");
