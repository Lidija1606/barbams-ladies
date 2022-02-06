import React from 'react';
import { ButtonGroup, Button } from 'reactstrap';

import { EditOrder } from './EditOrder'

const OrderActions = (props) => {
  const {
    onEdit,
    onDelete,
    onView
  } = props;
  const [open, setOpen] = React.useState(false)
  return (
    <React.Fragment>
    { open && <EditOrder order={props.order} open={open} setOpen={setOpen} />} 
    <ButtonGroup>
      <Button onClick={() => setOpen(true)} color="primary" size="lg"><i className="fa fa-pencil-square-o"></i></Button>
      <Button onClick={() => console.log(props.order)} color="success" size="lg"><i className="fa fa-eye-slash"></i></Button>
      <Button  color="danger" size="lg"><i className="fa fa-ban eye-slash"></i></Button>
      <Button  color="danger" size="lg"><i className="fa fa-user-o"></i></Button>
    </ButtonGroup>
    </React.Fragment>

  )
}

export default OrderActions;