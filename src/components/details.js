import React from 'react';

import Data from './data';

const Details = props => {
  const {data, fields, regulatory} = props.data;

  return (
    <div id="details">
      {data && data.length > 0 &&
      <div>
        <h4>Data</h4>
        <ul>
          {data.map((d, i) => <li key={i}><Data data={d}/></li>)}
        </ul>
      </div>
      }

      {fields && fields.length > 0 &&
      <div>
        <h4>Fields</h4>
        <ul>
          {fields.map((f, i) => <li key={i}><Data data={f}/></li>)}
        </ul>
      </div>
      }

      {regulatory && regulatory.length > 0 &&
      <div>
        <h4>Regulatory</h4>
        <ul>
          {regulatory.map((r, i) => <li key={i}>{r}</li>)}
        </ul>
      </div>
      }

    </div>
  );
};

export default Details;