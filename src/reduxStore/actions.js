
import  actionTypes from "./action_types"

export const updateNote = (note) =>({
    type: actionTypes.UPDATE_NOTE,
    payload: note
})

export const createNote = (data) => ({
    type:  actionTypes.CREATE_NOTE,
    payload: data,
})
export const setTheme = (theme) => ({
    type: actionTypes.SET_THEME,
    payload: theme
})
export  const deleteNote = (note) => ({
    type: actionTypes.DELETE_NOTE,
    payload: note,
})