import './Table.css';

import PropTypes from 'prop-types';
import React from 'react';
import TableRow from '../TableRow/TableRow';

class Table extends React.Component {

    render() {
        if (!this.props.value || !this.props.value[0]) {
            return <div className="alert alert-warning" role="alert">No data to display.</div>
        }

        const columns = Object.entries(this.props.value[0].data);
        return (
                <table className="table table-bordered">
                    <thead>
                        {this.props.title && (
                            <tr>
                                <td colSpan={columns.length + 2}>{this.props.title}</td>
                            </tr>
                        )}
                        <tr>
                            <th>&nbsp;</th>
                            {columns.map((prop, index) => {
                                return <th key={index}>{prop[0]}</th>
                            })}
                            <th>&nbsp;</th>
                        </tr>
                    </thead>

                        {Object.values(this.props.value).map((item, index) => (
                            <TableRow
                                key={index}
                                value={item}
                                columns={columns.length}
                                onDelete={this.props.onDelete.bind(this, index)}
                            />
                        ))}
                </table>
        );
    }
}

Table.propTypes = {
    title: PropTypes.string,
    value: PropTypes.arrayOf(PropTypes.shape({
        data: PropTypes.object,
        kids: PropTypes.object
    })).isRequired,
    onDelete: PropTypes.func.isRequired
};

export default Table;
