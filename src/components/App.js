import React, {Component} from 'react';

import moment from 'moment';
import ReactTable from 'react-table';

import 'react-table/react-table.css';
import './App.css';

import report from '../data/com.xyz.app.json';
import spec from '../data/specs.json'
import columns from './columns';
import Details from './details';

class App extends Component {

  constructor(){
    super();
    
    this.state = {
      details: {
        data: null,
        fields: null,
        regulatory: null
      }
    };
  }
  
  async componentWillMount(){
    await this.mergeAndSort();
  }

  mergeAndSort(){
    const tests = [];
    const keys = Object.keys(report.tests);
    keys.forEach(key => tests.push({key: key, ...report.tests[key], ...spec[key]}));
    tests
      .sort((a, b) => a.score < b.score)
      .sort((a, b) => !a.vulnerable && b.vulnerable);
    report.tests = tests;
  }

  render() {
    return (
      <div id="report">
        <div>
          <h1>{report.name}</h1>
          <p>{report.id} | {report.platform} | {moment(new Date(report.createdDate)).format('MM-DD-YYYY HH:mm:ss')}</p>
        </div>
        <div>
          <ReactTable
            className="-highlight"
            defaultPageSize={10}
            data={report.tests}
            columns={columns}
            getTdProps={(state, rowInfo, column, instance) => {
              return {
                onClick: (e) => {
                  console.log(rowInfo);
                  this.setState({details: report.tests[rowInfo.index]})
                }
              }
            }}
          />
        </div>
        <div>
          <Details data={this.state.details} />
        </div>
      </div>
    );
  }
}

export default App;
