import { ADD_COMMENT } from "./actionTypes";

export const addComment = (updateUser) => {
    return {
        type: ADD_COMMENT,
        updateUser,
    }
}