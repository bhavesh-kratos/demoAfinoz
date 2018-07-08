import { fetchGitData } from '../../actions/routines';
import { ADD_FORK_FILTER, ADD_LANGUAGE_FILTER, ADD_SORTERS, CLEAR_FILTERS } from '../../actions/actionTypes';

const initialState = {
    data: null,
    loading: false,
    error: null,
    sorters: null, //string
    filters: null, //string
    language: null //string
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case fetchGitData.TRIGGER:
            return {
                ...state,
                loading: true,
            };
        case fetchGitData.SUCCESS:
            console.log('response', action.payload)
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case fetchGitData.FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case ADD_FORK_FILTER:
            return {
                ...state,
                filters: action.payload
            };
        case ADD_LANGUAGE_FILTER:
            console.log(action.payload.language)
            return {
                ...state,
                filters: action.payload.type,
                language: action.payload.language
            };
        case ADD_SORTERS:
            return {
                ...state,
                sorters: action.payload
            };
        case CLEAR_FILTERS:
            return {
                ...state,
                filters: null,
                sorters: null,
                language: null
            };
        default:
            return state;
    }
};

export default reducer;
