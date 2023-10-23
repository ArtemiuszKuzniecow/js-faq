import { createLoadDataAction } from "../generators/actionsGenerator";
import { createDataSlice } from "../generators/reducerGenerator";
import { createDataSelector } from "../generators/selectorGenerator";

export const loadCategoriesData = createLoadDataAction("categories");
export const CategoriesSlice = createDataSlice("categories", loadCategoriesData);
export const selectCategories = createDataSelector("categories");
