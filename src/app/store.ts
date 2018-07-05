import {ICompany} from './company';
import {ADD_COMPANY, REMOVE_COMPANY, REMOVE_ALL_COMPANYS} from './actions';

export interface IAppState {
    companies: ICompany[];
}

export const INITIAL_STATE: IAppState = {
    companies: []
};

export function rootReducer(state: IAppState, action): IAppState {

    let userCompanies: any;

    switch (action.type) {
        case ADD_COMPANY:

            action.company.id = state.companies.length + 1;
            userCompanies = Object.assign({}, state, {
                companies: state.companies.concat(Object.assign({}, action.company))
            });

            localStorage.setItem('tracker.companies', JSON.stringify(userCompanies.companies));

            return userCompanies;

        case REMOVE_COMPANY:
            userCompanies = Object.assign({}, state, {
                companies: state.companies.filter(t => t.id !== action.id)
            });

            localStorage.setItem('tracker.companies', JSON.stringify(userCompanies.companies));

            return userCompanies;

        case REMOVE_ALL_COMPANYS:
            userCompanies = Object.assign({}, state, {
                companies: []
            });

            localStorage.setItem('tracker.companies', JSON.stringify(userCompanies.companies));

            return userCompanies;
    }

    const companies = localStorage.getItem('tracker.companies');

    if (companies) {
        state.companies = JSON.parse(companies);
    }

    return state;
}
