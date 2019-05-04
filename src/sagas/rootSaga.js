import { call, put, select, takeLatest } from 'redux-saga/effects';
import {countriesFetched, countriesFetchError, countryFetched ,countryFetchError} from '../actions/index';
import request from '../utils/request';

export function* loadData() {
    yield takeLatest('LOAD_COUNTRIES', getCountries);
    yield takeLatest('SET_SELECTED_COUNTRY', selectCountry);
}

export function* getCountries(){
    try{
        const data = yield call(request, "https://restcountries.eu/rest/v2/all");
        yield put(countriesFetched(data));
    }catch(err){
        yield put(countriesFetchError(err));
    }
}

export function* selectCountry(action){
    try{
        const data = yield call(request, `https://restcountries.eu/rest/v2/name/${action.name}`);
        yield put(countryFetched(data[0]));
    }catch(err){
        yield put(countryFetchError(err));
    }
}

