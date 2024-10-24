import { combineReducers } from "@reduxjs/toolkit";
import { dataReducer } from "./State";

export const reducerCombine = combineReducers({
    myData : dataReducer
})