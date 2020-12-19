import React from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';

const TransactionList = () => {
  const { transactions } = React.useContext(GlobalContext);

  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(trans => (
          <Transaction key={trans.id} transaction={trans} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
