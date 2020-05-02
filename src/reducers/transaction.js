const initialState = {
  ammount: 0,
  transactions: [],
  isLoading: false,
  error: null,
};

export const Types = {
  TRANSCATION_ADD: '@transaction/ADD',
  TRANSCATION_SET_LOADING: '@transaction/SET_LOADING',
  TRANSCATION_SET_ERROR: '@transaction/SET_ERROR',
  TRANSCATION_RESET: '@transaction/RESET',
};

export const Actions = {
  newTransaction: (value, description) => ({
    type: Types.TRANSCATION_ADD,
    payload: {value, description},
  }),
};

export const TransactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.TRANSCATION_SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case Types.TRANSCATION_ADD:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
        ammount: state.ammount + action.payload?.value,
      };
    case Types.TRANSCATION_SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case Types.TRANSCATION_RESET:
      return initialState;

    default:
      return state;
  }
};
