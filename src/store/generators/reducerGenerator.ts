import { createSlice, AsyncThunk } from "@reduxjs/toolkit";
import { ListItems } from "../../types";

interface InitialState {
    content: ListItems;
    isLoading: boolean;
    errors: string | null;
}

export const createDataSlice = (sliceName: string, asyncThunk: AsyncThunk<any, void, {}>) => {
    const initialState: InitialState = {
        content: [],
        isLoading: false,
        errors: null,
    };

    return createSlice({
        name: sliceName,
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            builder
                .addCase(asyncThunk.pending, (state) => {
                    state.isLoading = true;
                })
                .addCase(asyncThunk.fulfilled, (state, { payload }) => {
                    state.isLoading = false;
                    state.content = payload;
                })
                .addCase(asyncThunk.rejected, (state, { payload }) => {
                    state.isLoading = false;
                    state.errors = "Unknown error occurred";
                });
        },
    });
};