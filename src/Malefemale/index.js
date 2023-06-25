import React, { useState } from 'react';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    gender: '',
    city: '',
    technology: {
      html: false,
      css: false,
    },
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    
    if (type === 'checkbox') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        technology: {
          ...prevFormData.technology,
          [name]: checked,
        },
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <br />
        <label>
          Gender:
          <label>
            Male
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleChange}
            />
          </label>
          <label>
            Female
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleChange}
            />
          </label>
        </label>
        <br />
        <label>
          City:
          <select name="city" value={formData.city} onChange={handleChange}>
            <option value="">Select City</option>
            <option value="New York">New York</option>
            <option value="London">London</option>
            <option value="Tokyo">Tokyo</option>
            <option value="Sydney">Sydney</option>
          </select>
        </label>
        <br />
        <label>
          Technology:
          <br />
          <label>
            HTML
            <input
              type="checkbox"
              name="html"
              checked={formData.technology.html}
              onChange={handleChange}
            />
          </label>
          <label>
            CSS
            <input
              type="checkbox"
              name="css"
              checked={formData.technology.css}
              onChange={handleChange}
            />
          </label>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Index;
