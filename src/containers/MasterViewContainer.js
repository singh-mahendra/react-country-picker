import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// components / actions
import MasterViewPage from '../pages/MasterViewPage';
import * as countryActions from '../actions';

class MasterViewContainer extends React.Component {
    componentDidMount() {
        this.props.actions.loadCountries();
    }

    render() {
        const {countries, selectedCountry, actions} = {...this.props};
        return (<div>
            <MasterViewPage
                countries={countries}
                selectedCountry={selectedCountry}
                selectCountry={actions.selectCountry}
                searchCountryByName={actions.searchCountryByName}
                sortCountries={actions.sortCountries}
            />
        </div>);
    }
}

MasterViewContainer.propTypes = {
    countries: PropTypes.arrayOf(PropTypes.object).isRequired,
    selectedCountry: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    countries: state.countriesReducer.displayedCountries,
    selectedCountry: state.countriesReducer.selectedCountry
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Object.assign({}, countryActions), dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(MasterViewContainer);