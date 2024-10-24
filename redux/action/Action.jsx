import { typeAction } from "./actionType"

export const fetchCommon =(value) => {
    return {
        type : typeAction.FETCHCOMMON ,
        payload : value
    }
}
export const fetOptinal =(value) => {
    return {
        type : typeAction.OPTIONALDATA ,
        payload : value
    }
}