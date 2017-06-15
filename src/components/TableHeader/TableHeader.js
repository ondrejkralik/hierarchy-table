import './TableHeader.css';

import PropTypes from 'prop-types';
import React from 'react';

class TableHeader extends React.Component {

    render() {
        return (
            <thead className="TableHeader">
                {this.props.title && (
                    <tr>
                        <td colSpan={this.props.columns.length + 2}>{this.props.title}</td>
                    </tr>
                )}
                <tr>
                    <th>&nbsp;</th>
                    {this.props.columns.map((prop, index) => {
                        return <th key={index}>{prop}</th>
                    })}
                    <th>&nbsp;</th>
                </tr>
            </thead>
        );
    }
}

TableHeader.propTypes = {
    title: PropTypes.string,
    columns: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default TableHeader;
