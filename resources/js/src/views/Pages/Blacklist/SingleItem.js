import React from 'react'
import api from '../../../helpers/api';
import { Button } from 'reactstrap';

export const SingleItem = ({ id, email, getBlacklisted }) => {
  return (<tr>
    <th>{id}</th>
    <th style={{ display: "flex", justifyContent: "space-between" }}>{email}<Button onClick={async () => {
      await api.delete(`/clients/deleteBlacklistedEmail`, { data: { email } })
      getBlacklisted()
    }} color="danger" size="sm">remove</Button></th>
  </tr>)
}