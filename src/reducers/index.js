import { APPLY_CONFIGURATION } from '../actions';

const initialState = {
  user: {
    name: 'Anna',
    bookId: '5820e4e29f61d803006b2093',
    sheetId: 'sheet',
    baseUrl: 'https://api.fieldbook.com/v1/',
    username: process.env.REACT_APP_FIELDBOOK_USER,
    password: process.env.REACT_APP_FIELDBOOK_KEY,
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case APPLY_CONFIGURATION:
      return {
        ...state,
        open: action.configuration
      }
    default:
      return state
  }
}
