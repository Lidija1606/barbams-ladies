import constants from '../constants';

const initialState = {
  ordersList: [],
  productPricesList: [],
  isLoading: false,
  showMore: true
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case constants.GET_ORDERS_INIT:
      return {
        ...state,
        isLoading: true
      }
    case constants.GET_ORDERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        ordersList: action.payload,
        showMore: !!action.payload.length
      }
    case constants.GET_ORDERS_PAGINATED:
      return {
        ...state,
        isLoading: false,
        ordersList: [...state.ordersList, ...action.payload],
        showMore: !!action.payload.length

      }
    case constants.UPDATE_ORDER_STATUS_INIT:
      return {
        ...state,
        isLoading: true
      }
    case constants.UPDATE_ORDER_STATUS_SUCCESS:
      return {
        ...state,
        ordersList: state.ordersList.map((item, index) => {
          if (item.id !== action.payload.id) {
            return item;
          }
          return {
            ...item,
            ...action.payload
          }
        }),
        isLoading: false

      }
    case constants.GET_PRODUCT_PRICES_INIT:
      return {
        ...state,
        isLoading: true
      }
    case constants.GET_PRODUCT_PRICES_SUCCESS:
      return {
        ...state,
        productPricesList: action.payload
      }
    default:
      return state;

  }
}