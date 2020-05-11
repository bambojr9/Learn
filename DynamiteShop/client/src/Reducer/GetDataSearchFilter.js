import * as Types from '../constants/ActionTypes'
const GetDataSearchFilterInitialState = ''
const GetDataSearchFilter = (state = GetDataSearchFilterInitialState, action) => {
    switch (action.type) {
        case Types.GET_DATA_SEARCH_FILTER:
            state=action.getDataSearchFilter;
            return state
        default:
            return state
    }
}
export default GetDataSearchFilter;