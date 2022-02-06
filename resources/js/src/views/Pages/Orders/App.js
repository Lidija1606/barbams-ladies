import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Loader from "react-loader-spinner";
import OrdersList from "./components/OrdersList";
import {
    Card,
    CardBody,
    CardHeader,
    Col,
    Row,
    Input,
    Label,
    Form,
    FormGroup
} from "reactstrap";
import Button from "./LoadMoreButton"
import {
    getOrders,
    updateOrderStatus,
    updateOrderTrackingId,
    getProductPrices
} from "./actions/ordersActions";

const ORDER_STATUSES = [
    "PAID",
    "SHIPPED",
    "ORDERED",
    "PRE-PAYMENT",
    "DELIVERED",
    "ALL"
];

class App extends Component {
    constructor(props) {
        super(props);
        let activeProductPrice = 0;
        if (
            localStorage.getItem("user_id") == null ||
            localStorage.getItem("user_id") == 1
        ) {
            activeProductPrice = 4;
        } else {
            activeProductPrice = localStorage.getItem("product_price_ids");
        }
        this.state = {
            isStatusDDOpen: false,
            activeProductPriceId: activeProductPrice,
            activeOrderStatus: ORDER_STATUSES[0]
        };
    }

    componentDidMount() {
        const { getProductPrices } = this.props;


        if (
            localStorage.getItem("user_id") == null ||
            localStorage.getItem("user_id") == 1
        ) {

            getProductPrices();
        }

        this.getOrders();
    }

    toggleStatusDD = () => {
        this.setState(prevState => ({
            isStatusDDOpen: !prevState.isStatusDDOpen
        }));
    };

    onSelectChange = orderId => event => {
        const { updateOrderStatus } = this.props;

        updateOrderStatus(orderId, event.currentTarget.value);
    };
    updateTracking = (orderId, trackingId) => {
        const { updateOrderTrackingId } = this.props;

        updateOrderTrackingId(orderId, trackingId);
    };
    renderOrdersList = () => {
        const { ordersList } = this.props.orders;

        return ordersList.length > 0 ? (
            <Fragment>

                <OrdersList
                    ordersList={ordersList}
                    onSelectChange={this.onSelectChange}
                    updateTracking={this.updateTracking}
                />
                {this.props.orders.showMore && <Button
                    onClick={this.getOrdersPaginated}
                    loading={this.props.orders.isLoading}
                > Show More</Button>}

            </Fragment >
        ) : (
            "No Orders"
        );
    };

    onProductPriceSelectChange = event => {

        const val = event.currentTarget.value;

        this.setState(
            {
                activeProductPriceId: val
            },
            () => {
                this.getOrders();
            }
        );
    };

    onOrderStatusSelectChange = event => {

        const val = event.currentTarget.value;

        this.setState(
            {
                activeOrderStatus: val
            },
            () => {
                this.getOrders();
            }
        );
    };

    getOrders = () => {
        const { activeOrderStatus, activeProductPriceId } = this.state;
        const { getOrders } = this.props;
        getOrders(activeProductPriceId, activeOrderStatus);
    };
    getOrdersPaginated = () => {
        const { activeOrderStatus, activeProductPriceId } = this.state;
        console.log(this.state)
        const offset = this.props.orders.ordersList.length
        const { getOrders } = this.props;
        getOrders(activeProductPriceId, activeOrderStatus, 200, offset);
    };

    renderProductPriceSelect = () => {
        const { productPricesList, isLoading } = this.props.orders;

        const { activeProductPriceId, activeOrderStatus } = this.state;
        const usersIdsForFilters = [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "9",
            "10",
            "11"
        ];
        const isAdmins = ["1"];
        return usersIdsForFilters.includes(localStorage.getItem("user_id")) ? (
            <Card>
                <CardHeader>
                    <i className="fa fa-align-justify" /> Order Filters
                </CardHeader>
                <CardBody>
                    <Form inline>
                        <FormGroup className="pr-1">
                            {isAdmins.includes(
                                localStorage.getItem("user_id")
                            ) ? (
                                <Label
                                    for="productPriceSelect"
                                    className="pr-1"
                                >
                                    Country
                                </Label>
                            ) : (
                                ""
                            )}
                            {isAdmins.includes(
                                localStorage.getItem("user_id")
                            ) ? (
                                <Input
                                    type="select"
                                    id="productPriceSelect"
                                    className="col-md-12"
                                    value={activeProductPriceId}
                                    onChange={this.onProductPriceSelectChange}
                                    disabled={isLoading}
                                >
                                    <option value="0">All Countries</option>
                                    {productPricesList.map(
                                        (productPrice, index) => (
                                            <option
                                                key={`productPrice-${index}`}
                                                value={productPrice.id}
                                            >
                                                {productPrice.country_name}
                                            </option>
                                        )
                                    )}
                                </Input>
                            ) : (
                                ""
                            )}
                        </FormGroup>
                        <FormGroup className="pr-1">
                            <Label for="productStatus" className="pr-1">
                                Status
                            </Label>

                            <Input
                                type="select"
                                id="productStatus"
                                className="col-md-12"
                                value={activeOrderStatus}
                                onChange={this.onOrderStatusSelectChange}
                                disabled={isLoading}
                            >
                                {ORDER_STATUSES.map((status, index) => (
                                    <option
                                        key={`productPrice-${index}`}
                                        value={status}
                                    >
                                        {status}
                                    </option>
                                ))}
                            </Input>
                        </FormGroup>
                    </Form>
                </CardBody>
            </Card>
        ) : (
            ""
        );
    };

    render() {
        const { orders } = this.props;

        const loader = orders.isLoading ? (
            <div className="loader">
                <Loader type="Bars" color="#FFFFF" />
            </div>
        ) : (
            ""
        );

        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" lg="12">
                        {this.renderProductPriceSelect()}
                        <Card className="card-orders">
                            <CardHeader>
                                <i className="fa fa-align-justify" /> Orders
                            </CardHeader>
                            <CardBody>
                                {loader}
                                {this.renderOrdersList()}
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

function mapStateToProps(state) {
    // return {
    //   smsListProps: state.chatSmsReducer.smsList,
    //   text: state.chatSmsReducer.text
    // };
    return {
        orders: state.ordersReducer
    };
}

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            getOrders,
            updateOrderStatus,
            updateOrderTrackingId,
            getProductPrices
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
