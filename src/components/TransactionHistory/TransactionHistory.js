import React from 'react';
import { arrayOf, shape, string} from 'prop-types';
import classes from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table className={classes.table}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(item => (
        <tr key={item.id}>
          <td>{item.type}</td>
          <td>{item.amount}</td>
          <td>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: arrayOf(
    shape({
      id: string.isRequired,
      type: string.isRequired,
      amount: string.isRequired,
      currency: string.isRequired,
    })
  )
};

export default TransactionHistory;
