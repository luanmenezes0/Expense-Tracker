import produce from 'immer';

const reducer = (state, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case 'DELETE_TRANSACTION':
        draft.transactions = draft.transactions.filter((trans) => trans.id !== action.payload);
        break;

      case 'ADD_TRANSACTION':
        draft.transactions.push(action.payload);
        break;

      default:
        break;
    }
  });

export default reducer;
