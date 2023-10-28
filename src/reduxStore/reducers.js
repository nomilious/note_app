import  actionTypes from "./action_types"
import {updateDatabase} from "../note";
import type {Note} from "../note";

const initialState = {
    data: null,
    loading: true,
    error: null,
    selectedNote: 0,
    theme: "defaultAlgorithm"
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.DOWNLOAD_DATA:
            return { ...state, data: action.payload };
        case actionTypes.UPDATE_NOTE_TITLE:
            const indexT = state.selectedNote;
            const newTitle = action.payload;
            const updatedNoteT = {
                ...state.data[indexT],
                title: newTitle,
            };
            const updatedDataT = [
                ...state.data.slice(0, indexT),
                updatedNoteT,
                ...state.data.slice(indexT + 1)
            ];
            updateDatabase(updatedDataT);
            return {...state, data: updatedDataT};
        case actionTypes.UPDATE_NOTE_DESCRIPTION:
            const indexD = state.selectedNote;
            const newDescription = action.payload;
            const updatedNoteD = {
                ...state.data[indexD],
                description: newDescription,
            };
            const updatedDataD = [
                ...state.data.slice(0, indexD),
                updatedNoteD,
                ...state.data.slice(indexD + 1)
            ];
            updateDatabase(updatedDataD);
            return {...state, data: updatedDataD}
        case actionTypes.TOGGLE_LOADING:
            return { ...state, loading: action.payload };
        case actionTypes.SELECT_NOTE:
            return { ...state, selectedNote: action.payload };
        case actionTypes.SET_ERROR:
            return { ...state, loading: action.payload };
        case actionTypes.DELETE_NOTE:
            let indexToDelete = state.selectedNote;
            const updatedDataAfterDeletion = state.data.filter((_, index) => index !== indexToDelete);
            // select another note
            if (indexToDelete > 0) {
                indexToDelete-=1
            } else if (state.data.length > 1) {
                indexToDelete = state.data.length-2;
            } else {
                indexToDelete = 0
            }
            updateDatabase(updatedDataAfterDeletion);
            return { ...state, data: updatedDataAfterDeletion, selectedNote: indexToDelete };
        case actionTypes.CREATE_NOTE:
            const newNote: Note = {
                title: "",
                description: ""
            };
            const updatedData = state.data ? [...state.data, newNote] : [newNote];
            return {...state, data: updatedData}
        default:
            return state;
    }
}
export default rootReducer;