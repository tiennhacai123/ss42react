import React from 'react'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

export default function B10() {
  return (
    <div>B10
<Table striped>
      <thead>
        <tr>
          <th>STT</th>
          <th>Họ và tên</th>
          <th>Giới tính</th>
          <th>Ngày sinh</th>
          <th>Email</th>
          <th>Địa chỉ</th>
          <th>Chức năng</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Tiến deeptry</td>
          <td>Nam</td>
          <td>28/07/2005</td>
          <td>tien2005@gmail.com</td>
          <td>Hà Nội</td>
          <td>
            <Button variant="danger">Sửa</Button>{' '}
            <Button variant="warning">Xoá</Button>{' '}
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Tiến deeptry</td>
          <td>Nam</td>
          <td>28/07/2005</td>
          <td>tien2005@gmail.com</td>
          <td>Hà Nội</td>
          <td>
            <Button variant="danger">Sửa</Button>{' '}
            <Button variant="warning">Xoá</Button>{' '}
          </td>
        </tr><tr>
          <td>3</td>
          <td>Tiến deeptry</td>
          <td>Nam</td>
          <td>28/07/2005</td>
          <td>tien2005@gmail.com</td>
          <td>Hà Nội</td>
          <td>
            <Button variant="danger">Sửa</Button>{' '}
            <Button variant="warning">Xoá</Button>{' '}
          </td>
        </tr>
      </tbody>
    </Table>

    </div>
  )
}
