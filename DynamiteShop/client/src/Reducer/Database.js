import * as Types from '../constants/ActionTypes'
const DatabaseInitialState = [];
const Database = (state = DatabaseInitialState, action) => {
  switch (action.type) {
    case Types.FETCH_DATABASE:
console.log('Test FETCH DATA')
// console.log(action.products)
      return [action.database]
    default:
      return [...state];
  }
};
export default Database;
