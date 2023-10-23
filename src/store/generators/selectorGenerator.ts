import { RootStore } from "../rootReducer";

export const createDataSelector = (sliceName: string) => {
    return (state: RootStore) => state[sliceName as keyof RootStore]?.content;
};