import {
  createRequestTypes, action, createBasicRequestAction
} from '../../../utils/actionUtils';

export const INITIALIZE_PAGE = 'employment/INITIALIZE_PAGE';
export const initializePage = () => action(INITIALIZE_PAGE);

export const LOAD_PAGE = 'employment/LOAD_PAGE';
export const loadPage = () => action(LOAD_PAGE);

export const FETCH_EMPLOYMENT_DATA = createRequestTypes('employment/FETCH_EMPLOYMENT_DATA');
export const fetchEmploymentData = createBasicRequestAction(FETCH_EMPLOYMENT_DATA);
