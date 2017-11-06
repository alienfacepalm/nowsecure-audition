import React, {Component} from 'react';

import moment from 'moment';
import ReactTable from 'react-table';

import 'react-table/react-table.css';
import './App.css';

import columns from './columns';
import Details from './details';

class App extends Component {

  constructor(...args){
    super(...args);
    
    this.state = {
      report: {},
      details: {
        data: null,
        fields: null,
        regulatory: null
      }
    };
  }
  
  async componentWillMount(){
      await this.fetchReport();
  }

  async fetchReport(){
    let response = await fetch('http://localhost:3001/report');
    let report = await response.json();
    if(report.error){
      console.log(report.error);
    }else{
      this.setState({report: report});
    }
  }

  render() {
    const {report} = this.state;

    return (
      <div id="report">
        <div>
          <h1>{report.name}</h1>
          <p>{report.id} | {report.platform} | {moment(new Date(report.createdDate)).format('MM-DD-YYYY HH:mm:ss')}</p>
        </div>
        <div>
          {report.tests && report.tests.length &&
            <ReactTable
              className="-highlight"
              defaultPageSize={10}
              data={report.tests}
              columns={columns}
              getTdProps={(state, rowInfo, column, instance) => {
                return {
                  onClick: () => {
                    this.setState({details: report.tests[rowInfo.index]})
                  }
                }
              }}
            />
          }
        </div>
        <div>
          {this.state.details &&
            <Details data={this.state.details}/>
          }
        </div>
      </div>
    );
  }
}

export default App;
