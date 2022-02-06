import React from 'react';
import { Input } from 'reactstrap';
const ProductSelect = (props) => {
  const { list, onSelectChange, activeId, inputName, idProperty, nameProperty, allName } = props;

  return (

    <Input type="select"
      name={inputName}
      value={activeId}
      onChange={onSelectChange}
    >
      <option value="all">{allName}</option>
      {
        list.map((item, index) =>
          <option
            key={`${inputName}-${item[idProperty]}`}
            value={item[idProperty]}
          >
            {item[nameProperty]}
          </option>
        )
      }
    </Input>
  );
}

export default ProductSelect;