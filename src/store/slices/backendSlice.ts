import { createLoadDataAction } from "../generators/actionsGenerator";
import { createDataSlice } from "../generators/reducerGenerator";
import { createDataSelector } from "../generators/selectorGenerator";

export const loadBackendData = createLoadDataAction("backend");
export const BackendSlice = createDataSlice("backend", loadBackendData);
export const selectBackend = createDataSelector("backend");