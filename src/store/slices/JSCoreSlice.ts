import { createLoadDataAction } from "../generators/actionsGenerator";
import { createDataSlice } from "../generators/reducerGenerator";
import { createDataSelector } from "../generators/selectorGenerator";

export const loadJSCoreData = createLoadDataAction("JSCore");
export const JSCoreSlice = createDataSlice("JSCore", loadJSCoreData);
export const selectJSCore = createDataSelector("JSCore");
