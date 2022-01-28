import React from 'react';

const Table = props =>{
  return (
  <tr>
    <td>
      {props.title}
    </td>
    <td>
      {props.date}
    </td>
  </tr>
  )
}

export default Table;