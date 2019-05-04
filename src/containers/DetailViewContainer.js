import DetailViewPage from '../pages/DetailViewPage';
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Spinner from "../components/spinner";

class DetailViewContainer extends React.Component{
    render(){
        if(this.props.selectedCountry && !this.props.loading){
            return(
                <DetailViewPage name={this.props.selectedCountry.name} flag={this.props.selectedCountry.flag}/>
            )
        }
        return <Spinner/>;
    }
}

DetailViewContainer.propTypes = {
    selectedCountry: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    selectedCountry: state.countriesReducer.selectedCountry,
    loading: state.countriesReducer.countryLoading
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(DetailViewContainer)


