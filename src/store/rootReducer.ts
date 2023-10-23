import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { CategoriesSlice, BackendSlice, CommonQuestionsSlice, FrontendSlice, FunctionsSlice, JSCoreSlice, LayoutSlice, ReactSlice, ToolsSlice } from "./slices";

const rootReducer = combineReducers({
  categories: CategoriesSlice.reducer,
  backend: BackendSlice.reducer,
  commonQuestions: CommonQuestionsSlice.reducer,
  frontend: FrontendSlice.reducer,
  functions: FunctionsSlice.reducer,
  JSCore: JSCoreSlice.reducer,
  layout: LayoutSlice.reducer,
  react: ReactSlice.reducer,
  tools: ToolsSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;