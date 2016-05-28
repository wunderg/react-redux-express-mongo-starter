import React from 'react';

const style = {
  marginTop: '30%'
};

export default () => (
  <div className="center spinner" style={style}>
    <div className="preloader-wrapper big active">
      <div className="spinner-layer spinner-blue-only">
        <div className="circle-clipper left">
          <div className="circle"></div>
          </div><div className="gap-patch">
          <div className="circle"></div>
          </div><div className="circle-clipper right">
          <div className="circle"></div>
        </div>
      </div>
    </div>
  </div>
);
