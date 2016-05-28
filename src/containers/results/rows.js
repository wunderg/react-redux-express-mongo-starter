import React from 'react';

export default ({ instructor }) => (
  <tr>
    <td>{instructor.instructor}</td>
    <td>{instructor.now}</td>
    <td>{instructor.accepted}</td>
    <td>{instructor.will}</td>
  </tr>
);
