import React, { useState } from "react";
import emailjs from '@emailjs/browser'
function Doubts() {
  const [formData, setFormData] = useState({
    topic: '',
    description: '',
    phone: '',
    professorEmail: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your form submission logic
    alert('Form submitted successfully!');
    // setFormData({
    //   topic: '',
    //   description: '',
    //   phone: '',
    //   professorEmail: ''
    // });
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID,process.env.REACT_APP_TEMPLATE_ID,e.target,process.env.REACT_APP_PUBLIC_KEY);
  };

  return (
    <div className="doubts-container">
      <h2>Submit Your Doubts</h2>
      <form className="doubts-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="topic">Topic</label>
          <input
            type="text"
            id="topic"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            placeholder="Enter the topic of your doubt"
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe your doubt in detail"
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="professor-email">Professor's Email</label>
          <input
            type="email"
            id="professor-email"
            name="professorEmail"
            value={formData.professorEmail}
            onChange={handleChange}
            placeholder="Enter professor's email address"
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Submit Doubt
        </button>
      </form>
    </div>
  );
}

export default Doubts;
