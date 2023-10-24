import  actionTypes from "./action_types"

const initialState = {
    data: [],
    theme: "defaultAlgorithm"
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_NOTE:
            // Handle update note logic
            return /* updated state */;
        case actionTypes.CREATE_NOTE:
            // Handle create note logic
            return /* updated state */;
        case actionTypes.LOAD_DATA:
            // Handle create note logic
            return /* updated state */;
        case actionTypes.SET_THEME:
            // Handle set theme logic
            return /* updated state */;
        case actionTypes.DELETE_NOTE:
            // Handle delete note logic
            return /* updated state */;
        default:
            return state;
    }
}
export default rootReducer;