import React, { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (formData.name.trim().length < 5) {
      newErrors.name = "Name must be at least 5 characters long.";
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      newErrors.email = "Invalid email. Must include '@' and '.'.";
    }

    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert(`Registration Successful!\nWelcome, ${formData.name}`);
      // Reset form
      setFormData({ name: '', email: '', password: '' });
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>Register Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
        </div>

        <div>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
        </div>

        <div>
          <label>Password:</label><br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
        </div>

        <button type="submit" style={{ marginTop: "10px" }}>Register</button>
      </form>
    </div>
  );
}

export default Register;
