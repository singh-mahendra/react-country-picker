import * as types from '../actions/types';
const COUNTRIES = [
    {
        name: 'Bulgaria',
        region: 'Europe'
    },
    {
        name: 'Germany',
        region: 'Europe'
    },
    {
        name: 'France',
        region: 'Europe'
    },
    {
        name: 'India',
        region: 'Asia'
    },
    {
        name: 'China',
        region: 'Asia'
    },
    {
        name: 'Nepal',
        region: 'Asia'
    },
    {
        name: 'South Africa',
        region: 'Africa'
    }
];

const initialState = {
    countries: COUNTRIES,
    displayedCountries: COUNTRIES,
    selectedCountry: 'Bulgaria',
    countryLoading: false
};

export default function countriesReducer(state = initialState, action) {
    switch (action.type) {
        case types.COUNTRIES_FETCHED:{
            return {
                ...state,
                countries: action.countries,
                displayedCountries: action.countries
            };
        }
        case types.COUNTRY_FETCHED:{
            return {
                ...state,
                selectedCountry: action.country,
                countryLoading: false
            };
        }
        case types.COUNTRIES_FETCH_ERROR:{
            console.log(action.error);
        }
        case types.SET_SELECTED_COUNTRY: {
            return {
                ...state,
                selectedCountry: action.name,
                countryLoading: true
            };
        }
        case types.SEARCH_COUNTRY_BY_NAME:
            return{
                ...state,
                displayedCountries: action.name.length ? state.countries.filter(country => country.name.includes(action.name)): state.countries
            };
        case types.SORT_COUNTRIES:{
            let displayedCountries = state.displayedCountries;
            const sortByKey = key => (a,b) => a[key] > b[key];
            return{
                ...state,
                displayedCountries: [].concat(displayedCountries).sort(sortByKey('group'))
            };
        }
        default:
            return state;
    }
}