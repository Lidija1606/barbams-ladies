import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loader from 'react-loader-spinner'
import ProductList from './components/ProductList';

import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Table
} from 'reactstrap';


import {
  getProducts
} from '../actions/productsActions';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isStatusDDOpen: false
    }
  }

  componentDidMount() {
    console.log('========== Product App =========== ');

    const { getProducts } = this.props;
    getProducts();
  }

  renderProductList = () => {
    const {
      productsList
    } = this.props.products;
    console.log(productsList);

    return productsList.length > 0 ? (
      <Fragment>
        <ProductList
          productsList={productsList}
        />
        {/* <Pagination>
          <PaginationItem disabled><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
          <PaginationItem active>
            <PaginationLink tag="button">1</PaginationLink>
          </PaginationItem>
          <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
          <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
          <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
          <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
        </Pagination> */}
      </Fragment>
    ) : '';
  }

  render() {
    const {
      products
    } = this.props;

    const loader = products.isLoading ? (
      <div className="loader">
        <Loader

          type="Bars"
          color="#FFFFF"
        />
      </div>
    ) : '';


    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" lg="12">
            <Card className="card-orders">
              <CardHeader>
                <i className="fa fa-align-justify"></i> Products
              </CardHeader>
              <CardBody>
                {loader}
                {this.renderProductList()}

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
    products: state.productsReducer
  };
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    getProducts

  }, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(
  App
);