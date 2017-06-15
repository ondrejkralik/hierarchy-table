import './TableRow.css';

import PropTypes from 'prop-types';
import React from 'react';
import Table from '../Table/Table';

class TableRow extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            expand: false
        };
    }

    handleExpandClick() {
        this.setState({
            expand: !this.state.expand
        });
    }

    render() {
        const hasKids = Object.keys(this.props.value.kids).length > 0;

        return (
            <tbody>
                <tr>
                    {hasKids
                        ? <td onClick={this.handleExpandClick.bind(this)} className="clickable" title="Expand">
                            {this.state.expand ? <div>&#9660;</div> : <div>&#9654;</div>}
                        </td>
                        : <td>&nbsp;</td>}

                    {this.props.columns.map((columnName, index) => {
                        return <td key={index}>{this.props.value.data[columnName]}</td>
                    })}

                    <td onClick={this.props.onDelete.bind(this)} className="clickable" title="Delete">&#10006;</td>
                </tr>

                {hasKids && this.state.expand
                    && (
                        <tr className="kids">
                            <td colSpan={this.props.columns.length + 2}>
                                <Table
                                    title={Object.keys(this.props.value.kids)[0]}
                                    value={this.props.value.kids[Object.keys(this.props.value.kids)[0]].records}
                                    onDelete={this.props.onDelete}
                                />
                            </td>
                        </tr>
                    )
                }
            </tbody>
        )
    }
}

TableRow.propTypes = {
    columns: PropTypes.arrayOf(PropTypes.string).isRequired,
    value: PropTypes.shape({
        data: PropTypes.object,
        kids: PropTypes.object
    }).isRequired,
    onDelete: PropTypes.func.isRequired
};

export default TableRow;
