import React from 'react';
import PropTypes from 'prop-types';

const ListViewItem = ({ title, subTitle, active, handleOnClick }) => (
    <button className={`list-group-item ${(active && 'active-list-item')}`} onClick={handleOnClick}>
        <h4 className="list-group-item-heading">{title}</h4>
        <p className="list-group-item-text">{subTitle}</p>
    </button>
);

ListViewItem.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    handleOnClick: PropTypes.func.isRequired
};

export default ListViewItem;