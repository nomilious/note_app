import  actionTypes from "./action_types"
import Note from "../note"

export const updateNote = (note) =>({
    type: actionTypes.UPDATE_NOTE,
    payload: note
})
export const setError = (note) =>({
    type: actionTypes.SET_ERROR,
    payload: note
})

export const updateNoteTitle = (newTitle) => ({
    type: actionTypes.UPDATE_NOTE_TITLE,
    payload: newTitle,
})

export const updateNoteDescription = (newDescription) => ({
    type: actionTypes.UPDATE_NOTE_DESCRIPTION,
    payload: newDescription,
})


export const createNote = (note) => ({
    type:  actionTypes.CREATE_NOTE,
    payload: note,
})

export const setData = (data: Note[]) => ({
    type:  actionTypes.LOAD_DATA,
    payload: data,
});

export const setSelectedNote = (note)=> ({
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