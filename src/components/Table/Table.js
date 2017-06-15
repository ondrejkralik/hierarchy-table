import PropTypes from 'prop-types';
import React from 'react';
import TableHeader from '../TableHeader/TableHeader';
import TableRow from '../TableRow/TableRow';

class Table extends React.Component {

    /**
     * Get unique list of column names.
     * (because item’s data can have a variable number of attributes (key: value))
     *
     * @return {array} list of columns
     */
    getColumnNames() {
        const columnNames = new Set();

        for (const item of this.props.value) {
            for (const col of Object.keys(item.data)) {
                columnNames.add(col);
            }
        }

        return [...columnNames];
    }

    render() {
        if (!this.props.value || !this.props.value[0]) {
            return <div className="alert alert-warning" role="alert">No data to display.</div>
        }

        const columns = this.getColumnNames();
        return (
            <table className="table table-bordered">
                <TableHeader
                    title={this.props.title}
                    columns={columns}
                />

                {Object.values(this.props.value).map((item, index) => (
                    <TableRow
                        key={index}
                        value={item}
                        columns={columns}
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
