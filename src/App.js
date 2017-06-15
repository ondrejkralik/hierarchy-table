import './App.css';

import React, { Component } from 'react';

import DataStore from './stores/DataStore';
import Table from './components/Table/Table';

class App extends Component {

    handleOnDelete() {
        // get indices as position in structure of multidimensional array
        const indices = [...arguments].filter((arg) => typeof arg === 'number');

        DataStore.deleteItem(indices);

        this.forceUpdate();
    }

    render() {
        return (
            <div className="container" role="main">
                <div className="jumbotron">
                    <h1>Hierarchy table</h1>
                </div>

                <Table value={DataStore.getData()} onDelete={this.handleOnDelete.bind(this)}/>
            </div>
        );
    }
}

export default App;
