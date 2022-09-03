import React from 'react';
import { Card } from 'react-bootstrap';
import './MenuItems.css';

const MenuItems = (props) => {
  // ---------------------------------------
  // =============== js AREA ===============
  // ---------------------------------------
  const { title, category, price, img, desc } = props.item;

  // ---------------------------------------
  // =============== HTML AREA =============
  // ---------------------------------------
  return (
    <div className="col-md-4 col-sm-12 col-xs-12 my-3 d-flex justify-content-center menu-container">
      <Card className="card-item" style={{ width: '18rem' }}>
        <Card.Img className="card-img" variant="top" src={img} />
        <Card.Body className="text-secondary">
          <p>Name: {title}</p>
          <p>{desc}</p>
          <Card.Text>
            <small className="text-primary">Category : {category}</small>{' '}
          </Card.Text>
          <Card.Text>
            {' '}
            <small className="text-danger">Price : {price}</small>{' '}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MenuItems;
