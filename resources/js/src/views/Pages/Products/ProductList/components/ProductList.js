import React from 'react';
import Product from './Product'
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table
} from 'reactstrap';

const ProductList = (props) => {
  
  const {
    productsList,
    onSelectChange
  } = props;


  const renderProducts = productsList.map((product) => {
    return (
      <Product
        onSelectChange={onSelectChange}
        key={product.id}
        product={product}
      />
    )
  })

  return (
    <Table responsive striped className="loader-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Code</th>
          <th>Img</th>

          <th>Action</th>
        </tr>
      </thead>
      <tbody>

        {renderProducts}

      </tbody>
    </Table>

  );
}

export default ProductList;