import {FETCH_ERROR, FETCH_START, FETCH_SUCCESS} from "../actions";

const initialState = {
  characters: [],
  errorMessage: '',
  isFetching: false
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH_START:
        return {
            ...state,
            isFetching: true
        }
    case FETCH_SUCCESS:
        return {
            ...state,
            isFetching: false,
            characters: [...action.payload]
        }
    case FETCH_ERROR:
        return {
            ...state,
            errorMessage: action.payload
        }
    default:
      return state;
  }
};
