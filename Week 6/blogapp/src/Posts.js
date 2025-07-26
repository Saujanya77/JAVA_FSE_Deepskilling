import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false
    };
  }

  // Custom method to load posts
  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => this.setState({ posts: data }))
      .catch((error) => {
        console.error("Fetch error:", error);
        this.setState({ hasError: true });
      });
  }

  // Lifecycle method - runs after component mounts
  componentDidMount() {
    this.loadPosts();
  }

  // Error boundary for catching render errors
  componentDidCatch(error, info) {
    alert("Something went wrong in Posts component.");
    console.error("Error caught:", error, info);
    this.setState({ hasError: true });
  }

  // Render method
  render() {
    if (this.state.hasError) {
      return <h2>Oops! Something went wrong.</h2>;
    }

    return (
      <div>
        <h1>Blog Posts</h1>
        {this.state.posts.map((post) => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;
