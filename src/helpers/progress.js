import React from 'react';

export default ({ number }) => {

  const width = number || .5;

  const style = {
    width: width + '0%'
  };

  return (
    <div className="progress">
      <div className="determinate" style={style}>
      </div>
    </div>
  );
};
