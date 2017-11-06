import React from 'react';

const Data = props => {
  const {data} = props;
  const display = Object.keys(data).map((d,i) => `${d} : ${data[d]}`).join(', ');

  return (
    <div>
      {display}
    </div>
  );
};

export default Data;