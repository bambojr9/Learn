const numReducerInitialState = ["man hinh ", "chuot ", "banphim "];
const numReducer = (state = numReducerInitialState, action) => {
    switch (action.type) {
        case "ADD_NEW":
            return [...state, action.newItem];
        case "DELETE":
            return [state.filter((value, key) => key !== action.number)];
        default:
            return state;
    }
};
export default numReducer