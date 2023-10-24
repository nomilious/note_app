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
        case actionTypes.UPDATE_NOTE:
            // Handle update note logic
            return /* updated state */;
        case actionTypes.SELECT_NOTE:
            return { ...state, selectedNote: action.payload };
        case actionTypes.CREATE_NOTE:
            // Handle create note logic
            return /* updated state */;
        case actionTypes.LOAD_DATA:
            return { ...state, data: action.payload };
        case actionTypes.TOGGLE_THEME:
            // Handle set theme logic
            return /* updated state */;
        case actionTypes.TOGGLE_LOADING:
            return { ...state, loading: action.payload };
        case actionTypes.DELETE_NOTE:
            // Handle delete note logic
            return /* updated state */;
        case actionTypes.SET_ERROR:
            return { ...state, loading: action.payload };
        default:
            return state;
    }
}
export default rootReducer;