import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Input } from 'reactstrap';
import ProductActions from './ProductActions';

const Product = (props) => {
  const {
    product
  } = props;
  // if ('pre-payment' === constants.ORDER_STATUS['PRE-PAYMENT']) {
  //   console.log('JESTE');
  // }
  // else {
  //   console.log('NIJEEES');
  // }

  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.name} </td>
      <td>{product.code}</td>
      <td>{product.img}</td>
      <td>
        <ProductActions />
      </td>
      {/* <td>
          <Badge color="success">Active</Badge>
        </td> */}
    </tr >
  );
}

export default Product;