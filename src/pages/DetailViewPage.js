import React from 'react';
import PropTypes from 'prop-types';

export default class DetailViewPage extends React.Component{
    super(){

    }
    render(){
        return(
            <div>
                <img src={this.props.flag} alt="Flag" width="400" height="200"/>
                <span>{this.props.name}</span>
            </div>
        )
    }
}

DetailViewPage.propTypes = {
    name: PropTypes.string.isRequired
};