import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Input } from 'reactstrap';
import ProductPriceActions from './ProductPriceActions';

const ProductPrice = (props) => {
  const {
    productPrice,
    editMode
  } = props;
  // if ('pre-payment' === constants.ORDER_STATUS['PRE-PAYMENT']) {
  //   console.log('JESTE');
  // }
  // else {
  //   console.log('NIJEEES');
  // }

  const renderField = (value) => {
    return editMode ? <input type="text" value={value} /> : <span>{value}</span>
  }

  return (
    <tr>
      <td>{productPrice.id}</td>
      <td>{productPrice.product.name} </td>
      <td>{productPrice.currency} </td>
      <td>{renderField(productPrice.price)} </td>
      <td>{renderField(productPrice.shipping)} </td>
      <td>{productPrice.country_name} </td>
      <td>{renderField(productPrice.shipping_time)} </td>
      <td>
        <ProductPriceActions />
      </td>
      {/* <td>
          <Badge color="success">Active</Badge>
        </td> */}
    </tr >
  );
}

export default ProductPrice;