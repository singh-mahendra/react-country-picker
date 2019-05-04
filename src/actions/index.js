import * as types from './types';

export const loadCountries = () => ({
    type: types.LOAD_COUNTRIES
});

export const countriesFetched = (countries) => ({
    type: types.COUNTRIES_FETCHED,
    countries
});

export const countriesFetchError = (error) => ({
    type: types.COUNTRIES_FETCH_ERROR,
    error
});

export const selectCountry = name => ({
    type: types.SET_SELECTED_COUNTRY,
    name
});

export const searchCountryByName = name => ({
    type: types.SEARCH_COUNTRY_BY_NAME,
    name
});

export const sortCountries = (name , order)=> ({
    type: types.SORT_COUNTRIES,
    name,
    order
});

export const countryFetched = (country)=> ({
    type: types.COUNTRY_FETCHED,
    country
});

export const countryFetchError = (country)=> ({
    type: types.COUNTRY_FETCH_ERROR,
    country
});