import  actionTypes from "./action_types"
import {updateDatabase} from "../note";
import type {Note} from "../note";

const initialState = {
    data: null,             // Array of notes data
    loading: true,          // Indicates whether data is loading
    error: null,            // Stores any errors
    selectedNote: 0,        // Index of the currently selected note
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.DOWNLOAD_DATA:
            return { ...state, data: action.payload };
        case actionTypes.UPDATE_NOTE_TITLE:
            // Update the title of the selected note in the data and in the database(localStorage)
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
            // Update the description of the selected note in the data and in the database(localStorage)
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
            // IDEA: delete created note while switching to another if it's empty
            // if (state.selectedNote === 0 && action.payload!== 0 && !state.data[0].title && !state.data[0].description) {
            //     return { ...state, selectedNote: action.payload-1, data: state.data.slice(1) };
            // }
            return { ...state, selectedNote: action.payload };
        case actionTypes.SET_ERROR:
            return { ...state, error: action.payload };
        case actionTypes.DELETE_NOTE:
            // Delete the selected note, update the database(localStorage), and select another note
            let indexToDelete = state.selectedNote;
            const updatedDataAfterDeletion = state.data.filter((_, index) => index !== indexToDelete);
            // select another note
            if (indexToDelete > 0) {
                indexToDelete-=1
            } else  {
                indexToDelete = 0
            }
            updateDatabase(updatedDataAfterDeletion);
            return { ...state, data: updatedDataAfterDeletion, selectedNote: indexToDelete };
        case actionTypes.CREATE_NOTE:
            // Create a new empty note and add it to the beginning array
            const newNote: Note = {
                title: "",
                description: "",
                dateTime: Date.now()
            };
            const updatedData = state.data ? [newNote, ...state.data] : [newNote];
            return {...state, data: updatedData}
        default:
            return state;
    }
}
export default rootReducer;