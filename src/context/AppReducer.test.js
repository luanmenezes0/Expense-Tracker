import reducer from './AppReducer';

describe('app reducer', () => {
  const initialState = {
    transactions: [
      {
        id: 18,
        text: 'tv',
        amount: 1200,
      },
      {
        id: 22,
        text: 'laptop',
        amount: 1200,
      },
    ],
  };

  it('should handle DELETE_TRANSACTION', () => {
    const action = {
      type: 'DELETE_TRANSACTION',
      payload: 18,
    };

    const expectedState = {
      transactions: [
        {
          id: 22,
          text: 'laptop',
          amount: 1200,
        },
      ],
    };

    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle ADD_TRANSACTION', () => {
    const action = {
      type: 'ADD_TRANSACTION',
      payload: {
        id: 13,
        text: 'earbuds',
        amount: 4200,
      },
    };

    const expectedState = {
      ...initialState,
      transactions: [
        ...initialState.transactions,
        {
          id: 13,
          text: 'earbuds',
          amount: 4200,
        },
      ],
    };

    expect(reducer(initialState, action)).toEqual(expectedState);
  });
});
