import moment from 'moment';

export const toDate = (date) => moment(date).format('DD/MM/YYYY h:mm a');