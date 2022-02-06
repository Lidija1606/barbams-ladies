import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import MatButton from '@material-ui/core/Button';
import Input from '@material-ui/core/TextField';
import axios from 'axios';
import styled from 'styled-components'

const TextField = styled(Input)`
    margin: 15px;
    width: ${props => props.width}px;
`
const Button = styled(MatButton)`
    margin: 20px;
    width: 150px;
    display: inline-block;
`
const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
`

export const EditOrder = (props) => {
    const [values, setValues] = React.useState({...props.order})
    const [shipping, setShipping] = React.useState({tracking_no: "", so_no: "", trace_id: ""})

    const handleValuesChange = e => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }
    const handleShippingChange = e => {
        const { name, value } = e.target
        setShipping({ ...shipping, [name]: value })
    }
    const [isFetched, setIsFetched] = React.useState(false)
    const sendData = () => {
        const data = {
            ...values,
            shipping
        }
        const user_id = localStorage.getItem('user_id')
        axios.post(
            '/api/updateorder', {
            body: {
                user_id, data
            }
        }).then(e => console.log(e)).catch(e => console.log(e))
        console.log(JSON.stringify({user_id, data}))
    }
    React.useEffect(() => {
        (async function () {

            //const x = await axios.get(`/api/order/1684`);
            const x = await axios.get(`/api/order/${props.order.id}`);
            x.data.data.length && setValues({ ...x.data.data[0] })
            x.data.data.shippings && setShipping({ ...x.data.data[0].shippings })
            setIsFetched(true)

        })();

    }, [props.open]);
    return (isFetched && <Dialog onClose={() => {
        props.setOpen(false)
        location.reload();
    }} aria-labelledby="simple-dialog-title" open={props.open}>
        <DialogTitle id="simple-dialog-title">Edit Order</DialogTitle>

        <div>
            <TextField width={75} id="id" name="id" value={values.id} onChange={handleValuesChange} label="Order Id" />
            <TextField width={200} id="first_name" name="first_name" value={values.first_name} onChange={handleValuesChange} label="First Name" />
            <TextField width={200} id="last_name" name="last_name" value={values.last_name} onChange={handleValuesChange} label="Last Name" />
        </div>
        <div>
            <TextField width={200} id="phone_number" name="phone_number" value={values.phone_number} onChange={handleValuesChange} label="Phone Number" />
            <TextField width={300} id="email" name="email" value={values.email} onChange={handleValuesChange} label="Email" />
        </div>
        <div>
            <TextField width={250} id="address" name="address" value={values.address} onChange={handleValuesChange} label="Address" />
            <TextField width={150} id="city" name="city" value={values.city} onChange={handleValuesChange} label="City" />
            <TextField width={75} id="zip" name="zip" value={values.zip} onChange={handleValuesChange} label="Zip" />
        </div>
        <div>
            <TextField width={300} id="note" name="note" value={values.note || ""} onChange={handleValuesChange} label="Note" />
            <TextField id="status" name="status" value={values.status} onChange={handleValuesChange} label="Status" />
        </div>
        <div>
            <TextField width={150} id="tracking_no" name="tracking_no" value={shipping.tracking_no} onChange={handleShippingChange} label="Tracking Number" />
            <TextField width={150} id="so_no" name="so_no" value={shipping.so_no} onChange={handleShippingChange} label="So No" />
            <TextField width={150} id="trace_id" name="trace_id" value={shipping.trace_id} onChange={handleShippingChange} label="Trace ID" />
        </div>
        <StyledDiv>
            <Button onClick={() => {
                props.setOpen(false)
                location.reload();
            }} variant="contained" color="secondary" >Cancel</Button>
            <Button onClick={() => {
                sendData()
                props.setOpen(false)
                location.reload();
            }} variant="contained" color="primary" >Save </Button>
        </StyledDiv>

    </Dialog>)
}