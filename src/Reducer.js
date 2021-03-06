export const initialState = {
    basket:[]
}
// selector
export const getBasketTotal= (basket)=>
// tallies the basket and tallies items price and adds it to final amount
basket?.reduce((amount, item)=> item.price+ amount, 0)

const reducer = (state, action)=>{
    console.log(action, '')
    switch(action.type){
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket:[...state.basket, action.item],
            }

            case 'REMOVE_FROM_BASKET':
                return {...state, basket: state.basket.filter(item=> item.id !== action.payload)}
            default:
                return state
    }
}
export default reducer