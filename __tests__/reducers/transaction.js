import {
  TransactionReducer,
  Types,
  Actions,
} from '../../src/reducers/transaction';

describe('transaction reducer', () => {
  it('should return the initial state', () => {
    expect(TransactionReducer(undefined, {})).toEqual({
      ammount: 0,
      transactions: [],
      isLoading: false,
      error: null,
    });
  });

  it('should handle TRANSCATION_SET_LOADING', () => {
    expect(
      TransactionReducer(undefined, {
        type: Types.TRANSCATION_SET_LOADING,
        payload: true,
      }),
    ).toEqual({
      ammount: 0,
      transactions: [],
      isLoading: true,
      error: null,
    });
  });

  it('should unset TRANSCATION_SET_LOADING', () => {
    expect(
      TransactionReducer(
        {
          ammount: 0,
          transactions: [],
          isLoading: true,
          error: null,
        },
        {
          type: Types.TRANSCATION_SET_LOADING,
          payload: false,
        },
      ),
    ).toEqual({
      ammount: 0,
      transactions: [],
      isLoading: false,
      error: null,
    });
  });

  it('should insert TRANSCATION_ADD', () => {
    expect(
      TransactionReducer(undefined, {
        type: Types.TRANSCATION_ADD,
        payload: {
          value: 100,
          notes: 'Test Case TRANSCATION_ADD 1',
        },
      }),
    ).toEqual({
      ammount: 100,
      transactions: [
        {
          value: 100,
          notes: 'Test Case TRANSCATION_ADD 1',
        },
      ],
      isLoading: false,
      error: null,
    });
  });

  it('should insert next TRANSCATION_ADD', () => {
    expect(
      TransactionReducer(
        {
          ammount: 100,
          transactions: [
            {
              value: 100,
              notes: 'Test Case TRANSCATION_ADD 1',
            },
          ],
          isLoading: false,
          error: null,
        },
        {
          type: Types.TRANSCATION_ADD,
          payload: {
            value: -50,
            notes: 'Test Case TRANSCATION_ADD 2',
          },
        },
      ),
    ).toEqual({
      ammount: 50,
      transactions: [
        {
          value: -50,
          notes: 'Test Case TRANSCATION_ADD 2',
        },
        {
          value: 100,
          notes: 'Test Case TRANSCATION_ADD 1',
        },
      ],
      isLoading: false,
      error: null,
    });
  });

  it('should handle TRANSCATION_SET_ERROR', () => {
    expect(
      TransactionReducer(undefined, {
        type: Types.TRANSCATION_SET_ERROR,
        payload: 'ERRO 1',
      }),
    ).toEqual({
      ammount: 0,
      transactions: [],
      isLoading: false,
      error: 'ERRO 1',
    });
  });

  it('should set TRANSCATION_RESET', () => {
    expect(
      TransactionReducer(
        {
          ammount: 100,
          transactions: [
            {
              value: 100,
              notes: 'Test Case TRANSCATION_ADD 1',
            },
          ],
          isLoading: false,
          error: null,
        },
        {
          type: Types.TRANSCATION_RESET,
        },
      ),
    ).toEqual({
      ammount: 0,
      transactions: [],
      isLoading: false,
      error: null,
    });
  });

  it('should call newTransaction', () => {
    const description = 'Teste';
    const value = 100;
    const expectedAction = {
      type: Types.TRANSCATION_ADD,
      payload: {
        value,
        description,
      },
    };
    expect(Actions.newTransaction(value, description)).toEqual(expectedAction);
  });
});
