import React from 'react';

const Table = props =>{
  return (
  <div>
    <span>
      {props.title}
    </span>
    <span>
      {props.date}
    </span>
  </div>
  )
}

export default Table;