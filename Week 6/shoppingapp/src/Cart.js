import React from 'react';

class Cart extends React.Component {
  render() {
    return (
      <div>
        <h3>Item: {this.props.itemname}</h3>
        <p>Price: ₹{this.props.price}</p>
        <hr />
      </div>
    );
  }
}

// Default props if nothing is passed
Cart.defaultProps = {
  itemname: "No Item",
  price: 0
};

export default Cart;
