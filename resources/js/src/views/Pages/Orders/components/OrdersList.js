import React from "react";
import Order from "./Order";
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from "reactstrap";
import { ExportCSV } from "./ExelExport";

const OrdersList = props => {
    const { ordersList, onSelectChange, updateTracking } = props;

    const renderOrders = ordersList.map(order => {
        return (
            <Order
                onSelectChange={onSelectChange}
                updateTracking={updateTracking}
                key={order.id}
                order={order}
            />
        );
    });

    return (
        <React.Fragment>
            <ExportCSV csvData={ordersList} fileName={`orders`} />
            <Table responsive striped className="loader-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First/Last Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>Address</th>
                        <th>Zip</th>
                        <th>Note</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Payment Type</th>
                        <th>Currency</th>
                        <th>Price</th>
                        <th>Shipping</th>
                        <th>Price Country Code</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Tracking</th>

                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{renderOrders}</tbody>
            </Table>
        </React.Fragment>
    );
};

export default OrdersList;
