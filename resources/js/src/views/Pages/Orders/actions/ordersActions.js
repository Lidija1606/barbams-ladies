import API from "../../../../helpers/api";
import constants from "../constants";

export const getOrders = (countryFilter = 0, status = "PAID", limit = 200, offset = 0) => dispatch => {

    dispatch({
        type: constants.GET_ORDERS_INIT
    });

    API.get("/orders", {
        params: {
            country: countryFilter,
            status,
            offset,
            limit
        },
        headers: {
            Authorization: `${localStorage.getItem('auth_token')}`,
            'content-type': 'application/json',
        },
    }).then(response => {
        if (offset > 1) {
            dispatch({
                type: constants.GET_ORDERS_PAGINATED,
                payload: response.data.data
            });
        }
        else {
            dispatch({
                type: constants.GET_ORDERS_SUCCESS,
                payload: response.data.data
            });
        }
    });
};

export const updateOrderStatus = (orderId, newStatus) => dispatch => {
    console.log("newStatus", newStatus);
    dispatch({
        type: constants.UPDATE_ORDER_STATUS_INIT
    });
    const data = {
        newStatus: newStatus
    };
    API.put(`/orders/${orderId}`, data).then(response => {
        dispatch({
            type: constants.UPDATE_ORDER_STATUS_SUCCESS,
            payload: response.data.data
        });
    });
};


export const updateOrderTrackingId = (orderId, trackingId) => dispatch => {
    dispatch({
        type: constants.UPDATE_ORDER_STATUS_INIT
    });
    const data = {
        tracking_no: trackingId
    };
    API.put(`/orders/updateTracking/${orderId}`, data).then(response => {
        dispatch({
            type: constants.UPDATE_ORDER_STATUS_SUCCESS,
            payload: response.data.data
        });
    });
};

export const getProductPrices = () => dispatch => {
    dispatch({
        type: constants.GET_PRODUCT_PRICES_INIT
    });
    API.get("/products/prices/all").then(response => {
        dispatch({
            type: constants.GET_PRODUCT_PRICES_SUCCESS,
            payload: response.data.data
        });
    });
};
