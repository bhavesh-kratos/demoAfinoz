import { createSelector } from 'reselect'
import moment from 'moment';

export const CREATED_DATE_ASCEND = 'CREATED_DATE_ASCEND';
export const CREATED_DATE_DESCEND = 'CREATED_DATE_DESCEND';
export const UPDATED_DATE_ASCEND = 'UPDATED_DATE_ASCEND';
export const UPDATED_DATE_DESCEND = 'UPDATED_DATE_DESCEND';
export const FORK_ON = 'FORK_ON';
export const FORK_OFF = 'FORK_OFF';
export const LANGUAGE = 'LANGUAGE';

const getSorter = (state) => state.gitData.sorters;
const getFilter = (state) => state.gitData.filters;
const getGitData = (state) => state.gitData.data;
const getLanguage = (state) => state.gitData.language;

let toMillis = (date) => moment(date).format('x');

export const getFilteredData = createSelector(
    [getFilter, getSorter, getLanguage, getGitData],
    (filter, sorter, language, gitData) => {
        if (gitData !== null) {
            if (filter === null && sorter === null) {
                return gitData;
            }
            let FilteredResult = (providedData) => {
                switch (filter) {
                    case FORK_ON:
                        return providedData.filter(dat => dat['fork'] === true);
                    case FORK_OFF:
                        return providedData.filter(dat => dat['fork'] === false)
                    case LANGUAGE:
                        return providedData.filter(dat => dat['language'] === language);
                    default:
                        return providedData;
                }
            }
            let SortedResult = (providedData) => {
                switch (sorter) {
                    case CREATED_DATE_ASCEND:
                        return providedData.sort(function (a, b) {
                            return toMillis(a['created_at']) - toMillis(b['created_at'])
                        });
                    case CREATED_DATE_DESCEND:
                        return providedData.sort(function (a, b) {
                            return toMillis(b['created_at']) - toMillis(a['created_at'])
                        });
                    case UPDATED_DATE_ASCEND:
                        return providedData.sort(function (a, b) {
                            return toMillis(a['updated_at']) - toMillis(b['updated_at'])
                        });
                    case UPDATED_DATE_DESCEND:
                        return providedData.sort(function (a, b) {
                            return toMillis(b['updated_at']) - toMillis(a['updated_at'])
                        });
                    default:
                        return providedData;
                }
            }
            let data = JSON.parse(JSON.stringify(gitData)); // removing reference to nested objects and creating new copy
            let resultFiltered = FilteredResult(data);
            let result = SortedResult(resultFiltered);
            return result;
        }
        return null;
    }
);

export const getAllLanguages = createSelector(
    [getGitData],
    (gitData) => {
        if (gitData !== null) {
            return [...new Set(gitData.map(dat => dat.language))];
        }
    }
)
