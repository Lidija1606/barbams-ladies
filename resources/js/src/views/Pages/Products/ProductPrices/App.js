import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loader from 'react-loader-spinner';
import ProductPriceList from './components/ProductPriceList';
import ProductSelect from './components/ProductSelect';

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
  getProductPrices
} from '../actions/productPricesActions';

import {
  getProducts
} from '../actions/productsActions';

import {
  getCountries
} from '../actions/countriesActions';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeProductId: 'all',
      activeCountryCode: 'all'
    }
  }

  componentDidMount() {
    const { getProductPrices, getProducts, getCountries } = this.props;
    const { activeProductId, activeCountryCode } = this.state;
    getCountries();
    getProductPrices(activeProductId, activeCountryCode);
    getProducts();
  }

  componentDidUpdate(oldProps, prevState) {

    const { getProductPrices } = this.props;
    const { activeProductId, activeCountryCode } = this.state;
    // console.log('========== component did update ===========  prevState.activeProductId ', prevState.activeProductId, ' activeProductId ', activeProductId, ' prevState.activeCountryCod ', prevState.activeCountryCode, ' activeCountryCode ', activeCountryCode);

    if (prevState.activeProductId !== activeProductId || prevState.activeCountryCode !== activeCountryCode) {
      getProductPrices(activeProductId, activeCountryCode);
    }
  }

  renderProductList = () => {
    const {
      productPricesList
    } = this.props.productPrices;

    return productPricesList.length > 0 ? (
      <Fragment>
        <ProductPriceList
          productPriceList={productPricesList}
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

  onSelectChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    switch (name) {
      case 'productSelect':
        this.setState({
          activeProductId: value
        });
        break;
      case 'countrySelect':
        break;
      default:
        break;
    }

    if (name === 'productSelect') {
      this.setState({
        activeProductId: value
      }, () => {
        // console.log(this.state.activeProductId);
      });
    } else {
      this.setState({
        activeCountryCode: value
      }, () => {
        // console.log(this.state.activeCountryCode);
      })
    }
    // console.log('name ', name, ' value ', value);
  }

  onEditAction = () => {
    
  }

  render() {
    const {
      productPrices,
      products,
      countries
    } = this.props;


    console.log(this.props);
    const loader = productPrices.isLoading ? (
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
                <i className="fa fa-align-justify"></i> Product Prices
              </CardHeader>
              <CardBody>
                <Row className="table-filters">
                  <Col xs="3" lg="3">
                    <ProductSelect
                      activeId={this.state.activeCountryCode}
                      list={countries.countriesList}
                      onSelectChange={this.onSelectChange}
                      inputName="countrySelect"
                      allName="All Countries"
                      idProperty="country_code"
                      nameProperty="country_name"
                    />
                  </Col>
                  <Col xs="3" lg="3">
                    <ProductSelect
                      activeId={this.state.activeProductId}
                      list={products.productsList}
                      onSelectChange={this.onSelectChange}
                      inputName="productSelect"
                      allName="All Products"
                      idProperty="id"
                      nameProperty="name"
                    />
                  </Col>
                </Row>
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
  // console.log('========== mapStateToProps =========== ', state);

  return {
    productPrices: state.productPricesReducer,
    products: state.productsReducer,
    countries: state.countriesReducer
  };
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    getProductPrices,
    getProducts,
    getCountries
  }, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(
  App
);