import { createRoutine } from 'redux-saga-routines';
import * as actionTypes from './actionTypes';

// please note that routines helps in creating action creators of 4 types for a given actionType(string): request, success, failure and completed 

export const fetchGitData = createRoutine(actionTypes.FETCH_GIT_DATA);

// normal action creators
export const addLanguageFilter = (data) => ({ 'type': actionTypes.ADD_LANGUAGE_FILTER, payload: data });
export const addForkFilter = (data) => ({ 'type': actionTypes.ADD_FORK_FILTER, payload: data });
export const addSorters = (data) => ({ 'type': actionTypes.ADD_SORTERS, payload: data });
export const clearFilters = () => ({ 'type': actionTypes.CLEAR_FILTERS });