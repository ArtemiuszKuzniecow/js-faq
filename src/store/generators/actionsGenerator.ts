import { createAsyncThunk } from "@reduxjs/toolkit";
import dataService from "../../services/data.service";

export const createLoadDataAction = (sliceName: string) => {
    return createAsyncThunk(
        sliceName,
        async (_: void, thunkApi) => {
            try {
                const content = await dataService.get(sliceName);
                return content;
            } catch (error) {
                return thunkApi.rejectWithValue(error);
            }
        }
    );
};