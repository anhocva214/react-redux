var redux = require('redux');

var oldState = {
    array: ["may tinh", "chuot", "ban phim"],
    editStatus: true
}

var reducer_1 = (state, action) => {
    state = oldState;
    // console.log('reducer: ', state);
    switch (action.type) {
        case 'CHANGE_EDIT_STATUS': {
            return { ...state, editStatus: !state.editStatus };
        }

        case 'ADD_NEW_ITEM': {
            return { ...state, array: [...state.array, action.newItem] };
        }

        case 'DELETE_ITEM': {
            return { ...state, array: state.array.filter((value, index) => index !== action.deleteItemIndex) }
        }

        default:
            break;
    }

    return false;
}

var store_1 = redux.createStore(reducer_1);
store_1.subscribe(() => {
    console.log(store_1.getState());
});

store_1.dispatch({ type: 'CHANGE_EDIT_STATUS' });

store_1.dispatch({
    type: 'ADD_NEW_ITEM',
    newItem: 'tai nghe'
});

store_1.dispatch({
    type: 'DELETE_ITEM',
    deleteItemIndex: 1
});

export default store_1;