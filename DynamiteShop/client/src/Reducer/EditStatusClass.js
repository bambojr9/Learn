const EditStatusClassInitialState = {EditStatusClass:false};
const EditStatusClass = (state = EditStatusClassInitialState, action) => {
    switch (action.type) {
        case 'CHANGE_EDIT_STATUS_CLASS':
          return {...state, EditStatusClass:!state.EditStatusClass}
    
        default:
          return state;
      }
};

export default EditStatusClass
