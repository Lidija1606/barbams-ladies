import React from 'react';
import ProductPrice from './ProductPrice';
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table
} from 'reactstrap';

const ProductPriceList = (props) => {
  const {
    productPriceList,
    onSelectChange
  } = props;


  const renderProducts = productPriceList.map((productPrice) => {
    return (
      <ProductPrice
        onSelectChange={onSelectChange}
        key={productPrice.id}
        productPrice={productPrice}

      />
    )
  })

  return (
    <Table responsive striped className="loader-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Product Name</th>
          <th>Currency</th>
          <th>Price</th>
          <th>Shipping</th>
          <th>Country Name</th>
          <th>Shipping time</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>

        {renderProducts}

      </tbody>
    </Table>

  );
}

export default ProductPriceList;