import React, { useState, useEffect } from "react";
import AnswerCard from "./components/AnswerCard";
import Sidebar from "./components/Sidebar";
import AppLoader from "./HOC/AppLoader";
import { useSelector } from "react-redux";
import {
  selectCategories,
  selectBackend,
  selectCommonQuestions,
  selectFrontend,
  selectFunctions,
  selectJSCore,
  selectLayout,
  selectReact,
  selectTools
} from "./store/slices";
import { Category, ListItems, CurrentAnswer, IData } from "./types";
import { RootStore } from "./store/rootReducer";

function App() {
  const [status, setStatus] = useState<Category>('categories');
  const [items, setItems] = useState<ListItems>([]);
  const [currentAnswer, setCurrentAnswer] = useState<CurrentAnswer>({ answer: '', question: '' });

  const categories = useSelector((state: RootStore) => selectCategories(state));
  const backend = useSelector((state: RootStore) => selectBackend(state));
  const commonQuestions = useSelector((state: RootStore) => selectCommonQuestions(state));
  const frontend = useSelector((state: RootStore) => selectFrontend(state));
  const functions = useSelector((state: RootStore) => selectFunctions(state));
  const JSCore = useSelector((state: RootStore) => selectJSCore(state));
  const layout = useSelector((state: RootStore) => selectLayout(state));
  const react = useSelector((state: RootStore) => selectReact(state));
  const tools = useSelector((state: RootStore) => selectTools(state));

  const data = {
    categories, backend, commonQuestions, frontend, functions, JSCore, layout, react, tools
  };


  const handleChangeCategory = (category: Category, index?: number) => {
    const currentStatus = data[category as keyof IData];

    if (category === 'answer' && index !== undefined) {
      const currentItem = items[index];
      if ('answer' in currentItem && currentItem.answer !== undefined) {
        setCurrentAnswer({ answer: currentItem.answer, question: currentItem.name });
      }
    } else {
      setStatus(category);
      setItems(currentStatus as ListItems);
    }
  };

  useEffect(() => {
    if (status === 'categories') setItems(data.categories as ListItems);
  }, [data]);

  return (
    <AppLoader>
      <div className="App">
        <Sidebar status={status} items={items} handleChangeCategory={handleChangeCategory} />
        <AnswerCard status={status} answer={currentAnswer.answer} question={currentAnswer.question} />
      </div>
    </AppLoader>
  );
}

export default App;