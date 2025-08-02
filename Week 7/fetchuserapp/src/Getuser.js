// src/Getuser.js
import React, { Component } from 'react';

class Getuser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: true,
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch('https://api.randomuser.me/');
      const data = await response.json();
      const user = data.results[0];
      this.setState({ user, loading: false });
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  }

  render() {
    const { user, loading } = this.state;

    if (loading) return <h3>Loading user data...</h3>;

    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>User Info</h2>
        <p><strong>Title:</strong> {user.name.title}</p>
        <p><strong>First Name:</strong> {user.name.first}</p>
        <img src={user.picture.large} alt="User" style={{ borderRadius: '50%' }} />
      </div>
    );
  }
}

export default Getuser;
