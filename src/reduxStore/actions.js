
import  actionTypes from "./action_types"

export const updateNote = (note) =>({
    type: actionTypes.UPDATE_NOTE,
    payload: note
})

export const createNote = (note) => ({
    type:  actionTypes.CREATE_NOTE,
    payload: note,
})

export const setData = (data) => ({
    type:  actionTypes.LOAD_DATA,
    payload: data,
});

export const setNote = (note)=> ({
    type:  actionTypes.SELECT_NOTE,
    payload: note,
})

export const setLoading = (loading) => ({
    type:  actionTypes.TOGGLE_LOADING,
    payload: loading,
})
export const setTheme = (theme) => ({
    type: actionTypes.TOGGLE_THEME,
    payload: theme
})
export  const deleteNote = (note) => ({
    type: actionTypes.DELETE_NOTE,
    payload: note,
})