import { configureStore  } from "@reduxjs/toolkit";
import { reducerCombine } from "../reducer/Reducer";

export const storeData= configureStore({
    reducer : reducerCombine,
}
)