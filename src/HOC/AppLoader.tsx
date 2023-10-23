import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/rootReducer";
import React from "react";
import { loadCategoriesData, loadBackendData, loadCommonQuestionsData, loadFrontendData, loadFunctionsData, loadJSCoreData, loadLayoutData, loadReactData, loadToolsData } from "../store/slices";


const AppLoader = ({ children }: {
    children: React.ReactNode | React.ReactNode[];
}) => {
    const [isLoading, setLoading] = React.useState<boolean>(true);
    const dispatch = useDispatch<AppDispatch>();

    React.useEffect(() => {
        setLoading(true)
        dispatch(loadCategoriesData());
        dispatch(loadBackendData());
        dispatch(loadCommonQuestionsData());
        dispatch(loadFrontendData());
        dispatch(loadFunctionsData());
        dispatch(loadJSCoreData());
        dispatch(loadLayoutData());
        dispatch(loadReactData());
        dispatch(loadToolsData());
        setLoading(false)
    }, []);

    return <>{isLoading ? <div>Loading...</div> : children}</>;

}

export default AppLoader;