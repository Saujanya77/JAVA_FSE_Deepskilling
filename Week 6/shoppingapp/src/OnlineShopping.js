import React from 'react';
import Cart from './Cart';

class OnlineShopping extends React.Component {
  render() {
    // Array of items
    const items = [
      { itemname: 'T-shirt', price: 499 },
      { itemname: 'Shoes', price: 1299 },
      { itemname: 'Jeans', price: 899 },
      { itemname: 'Watch', price: 1999 },
      { itemname: 'Backpack', price: 999 }
    ];

    return (
      <div>
        <h1>🛒 Welcome to Online Shopping 🛍️</h1>
        {
          items.map((item, index) => (
            <Cart key={index} itemname={item.itemname} price={item.price} />
          ))
        }
      </div>
    );
  }
}

export default OnlineShopping;
