export const initialState = {
  basket: [],
  user: null,
};

export const getbasketvalue = (basket) =>
  basket.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
  switch (action.type) {
      case "set_user":
         return {
          ...state,
          user:action.user
          }
    case "ADD_to_basket":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
      break;
    case "Remove_from_basket":
      let newbasket = [...state.basket];
      newbasket = newbasket.filter((noteItem, index) => {
        return index !== action.id;
      });
      return { ...state, basket: newbasket };
      break;
    default:
      return state;
  }
}

export default reducer;
