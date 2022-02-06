import React, { useState, useEffect } from 'react';
import { Table, Button } from 'reactstrap';
import { SingleItem } from './SingleItem';
import api from '../../../helpers/api';
import { Input, InputGroup } from 'reactstrap';

export const Blacklist = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("")

  const getBlacklisted = async () => {
    const x = await api.get("/clients/blacklistedEmails")
    setList(x.data.data)
  }
  useEffect(() => {

    getBlacklisted()
  }, []);
  return (
    <React.Fragment>
      <InputGroup style={{ marginBottom: "20px" }}>
        <Input style={{ marginRight: "20px" }} value={input} onChange={e => setInput(e.target.value)} placeholder="enter email here..." />
        <Button onClick={async () => {
          await api.put(`/clients/blacklistEmail`, { email: input })
          getBlacklisted()
          setInput("")
        }}> Add email to blacklist </Button>
      </InputGroup>
      <Table responsive striped className="loader-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => <SingleItem getBlacklisted={getBlacklisted} key={index} {...item} />)}

        </tbody>
      </Table>
    </React.Fragment>


  );
}