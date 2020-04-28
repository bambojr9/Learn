import * as Types from '../constants/ActionTypes'

const EditStatusClassInitialState = {isEditStatusClass:false};
const EditStatusClass = (state = EditStatusClassInitialState, action) => {
    switch (action.type) {
        case Types.CHANGE_EDIT_STATUS_CLASS:
          return {...state, isEditStatusClass:!state.isEditStatusClass}
    
        default:
          return state;
      }
};

export default EditStatusClass
