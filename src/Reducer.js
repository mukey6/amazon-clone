export const initialState = {
    basket:[]
}
// selector
// export const getBasketTotal= (basket)=>{
//     // tallies the basket and tallies items price and adds it to final amount
//     basket?.reduce((amount, item)=> item.price+ amount, 0)

// }

const reducer = (state, action)=>{
    console.log(action, '')
    switch(action.type){
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket:[...state.basket, action.item],
            }

            case 'REMOVE_FROM_BASKET':
                const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
                let newBasket = [...state.basket] // current basket
                if(index >= 0){
                    newBasket.splice(index,1) 
                }else{
                    console.warn(`cannot remove (id: ${action.id})`)
                }
                return {
                    ...state,
                    basket: newBasket
                }

            default:
                return state
                
    }
}
export default reducer
