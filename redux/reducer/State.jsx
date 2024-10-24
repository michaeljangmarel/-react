import { typeAction } from "../action/actionType";

const initialState = {
  datas: [],  // For holding multiple data items
  data: {}    // For holding a single data item
};

export const dataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case typeAction.FETCHCOMMON:
      // Keep the current state and update 'datas' with the payload
      return { ...state, datas: payload };

    case typeAction.OPTIONALDATA:
      // Keep the current state and update 'data' with the payload
      return { ...state, data: payload };

    default:
      // Return the current state by default
      return state;
  }
};
