import React from 'react';
import { ButtonGroup, Button } from 'reactstrap';


const ProductPriceActions = (props) => {

  const {
    onEdit,
    onDelete,
    onView
  } = props;

  return (
    <ButtonGroup>
      {/* eye-slash */}
      {/* <Button block outline color="dark">Dark</Button> */}
      <Button color="primary" size="lg" onClick={onEdit}><i className="fa fa-pencil-square-o"></i></Button>
      <Button color="success" size="lg"><i className="fa fa-eye-slash"></i></Button>
      <Button color="danger" size="lg"><i className="fa fa-ban eye-slash"></i></Button>
      <Button color="danger" size="lg"><i className="fa fa-user-o"></i></Button>
    </ButtonGroup>
  )
}

export default ProductPriceActions;