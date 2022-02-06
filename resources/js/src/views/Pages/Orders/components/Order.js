import React from "react";
import constants from "../constants";
import {
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Input
} from "reactstrap";

import OrderActions from "./OrderActions";
import styled from "styled-components";
import { Tracking } from "./Tracking";

const SelectField = styled(Input)`
    width: ${props => props.width}px;
`;
const Order = props => {
    const { order, onSelectChange, updateTracking } = props;
    // if ('pre-payment' === constants.ORDER_STATUS['PRE-PAYMENT']) {
    //   console.log('JESTE');
    // }
    // else {
    //   console.log('NIJEEES');
    // }
    return (
        <tr>
            <td>{order.id}</td>
            <td>
                {order.first_name} {order.last_name}
            </td>
            <td>{order.phone_number}</td>
            <td>{order.email}</td>
            <td>{order.city}</td>
            <td>{order.address}</td>
            <td>{order.zip}</td>
            <td>{order.note}</td>
            <td>{order.created_at}</td>
            <td className="col-md-6">
                <SelectField
                    width={150}
                    type="select"
                    value={order.status}
                    onChange={onSelectChange(order.id)}
                >
                    {constants.ORDER_STATUS.map((status, index) => (
                        <option key={`status-${index}`} value={status}>
                            {status}
                        </option>
                    ))}
                </SelectField>
            </td>
            <td>{order.payment_types.type}</td>
            <td>{order.payment_types.product_price.currency}</td>
            <td>{order.payment_types.product_price.price}</td>
            <td>{order.payment_types.product_price.shipping}</td>
            <td>{order.payment_types.product_price.country_code}</td>

            <td>{order.quantity}</td>
            <td>{order.total}</td>
            <td>
                <Tracking
                    updateTracking={updateTracking}
                    orderId={order.id}
                    value={order.tracking_no || ""}
                />
            </td>
            <td>
                <OrderActions order={order} />
            </td>

            {/* <td>
          <Badge color="success">Active</Badge>
        </td> */}
        </tr>
    );
};

export default Order;
