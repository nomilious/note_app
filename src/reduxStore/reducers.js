import  actionTypes from "./action_types"

const initialState = {
    data: null,
    loading: true,
    error: null,
    selectedNote: 0,
    theme: "defaultAlgorithm"
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_DATA:
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

            return {...state, data: updatedDataD}
        case actionTypes.TOGGLE_LOADING:
            return { ...state, loading: action.payload };
        case actionTypes.SELECT_NOTE:
            return { ...state, selectedNote: action.payload };
        case actionTypes.SET_ERROR:
            return { ...state, loading: action.payload };
        case actionTypes.DELETE_NOTE:
            // Handle delete note logic
            return /* updated state */;
        case actionTypes.CREATE_NOTE:
            const newNote = {
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