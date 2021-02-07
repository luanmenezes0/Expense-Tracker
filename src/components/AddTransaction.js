import React from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
  const [text, setText] = React.useState('');
  const [amount, setAmount] = React.useState(0);

  const { addTransaction } = React.useContext(GlobalContext);

  const addTransactionHandler = (ev) => {
    ev.preventDefault();
    addTransaction({ id: Math.random() * 100, text, amount: parseInt(amount) });
    setAmount('');
    setText('');
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={addTransactionHandler}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
