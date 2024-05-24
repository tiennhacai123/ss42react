import React from 'react'
import Form from 'react-bootstrap/Form';

export default function B4() {
  return (
    <div>B4
        <Form.Select aria-label="Default select example" style={{width:'200px'}}>
      <option>Le Dien Tien</option>
      <option value="1">Deep try</option>
      <option value="2">Nha giau</option>
      <option value="3">Hoc gioi</option>
    </Form.Select>
    </div>
  )
}
