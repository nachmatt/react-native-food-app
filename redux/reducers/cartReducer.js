let defaultState = {
    selectedItems: {items: [], restaurantName: '', isChecked: false}
}

let cartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            let newState = {...state};

            if (action.payload.isChecked) {
                console.log('ADD TO CART')
                newState.selectedItems = {
                    items: [...newState.selectedItems.items, action.payload],
                    restaurantName: action.payload.restaurantName,
                    isChecked: action.payload.isChecked,
                }
            } else {
                console.log('REMOVE FROM CART')
                newState.selectedItems = {
                    items: [
                        ...newState.selectedItems.items.filter(
                            (item) => item.title !== action.payload.title
                        ),
                    ],
                    restaurantName: action.payload.restaurantName,
                }
            }
            console.log(newState, '👉')
            console.log(newState.selectedItems.items)
            return newState
        }
        default: return state;
    }
}

export default cartReducer;