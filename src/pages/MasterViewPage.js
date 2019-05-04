import React from 'react';
import PropTypes from 'prop-types';

import ListViewItem from '../components/ListViewItem';

const CountryMasterPage = ({ countries, selectedCountry, selectCountry, searchCountryByName , sortCountries}) => (
    <div>
        <label htmlFor="basic-url">Search Country</label>
        <div className="mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon3"></span>
            </div>
            <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" onChange={(evt) => searchCountryByName(evt.target.value)}/>
        </div>
        <div className="list-group list-scrollable">
            {countries.length > 0? (countries.map(country => (
                    <ListViewItem
                        key={country.name}
                        title={country.name}
                        subTitle={country.region}
                        active={selectedCountry === country.name}
                        handleOnClick={() => selectCountry(country.name)}
                    />
                )
            )): <div>Loading...</div>}
        </div>
    </div>
);

CountryMasterPage.propTypes = {
    countries: PropTypes.arrayOf(PropTypes.object).isRequired,
    selectedCountry: PropTypes.object.isRequired,
    selectCountry: PropTypes.func.isRequired,
    searchCountryByName: PropTypes.func.isRequired,
    sortCountries: PropTypes.func.isRequired,
};

export default CountryMasterPage;