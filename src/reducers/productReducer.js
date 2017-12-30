export default function (state={},action){
    switch(action.type){
        case 'GET_INITIAL_PRODUCTS':
            return{...state, foundProducts:action.payload};
        case 'GET_SEARCHED_PRODUCTS':
            return{...state, foundProducts:action.payload};
        case 'GET_INDIVIDUAL_PRODUCTS':
            return{...state, individualProduct:action.payload};
        case 'CLEAR_PRODUCT_STATE':
            return{...state,individualProduct:action.payload};
        default:
            return state
    }
}