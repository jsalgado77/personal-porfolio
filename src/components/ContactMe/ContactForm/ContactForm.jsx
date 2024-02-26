import React, { useState } from 'react';
import "./ContactForm.css";

const ContactForm = () => {

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log("Form data submitted successfully");
        window.alert("Thank you for reaching out. I will get back to you ASAP :)");
      
        setFormData({
          fname: "",
          lname: "",
          email: "",
          message: ""
        });
      } else {
        console.error("Error submitting form data");
      }
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  return (
    <div className="contact-form-content">
      <form onSubmit={handleSubmit}>
        <div className="name-container">
          <input type="text" name="fname" value={formData.fname} onChange={handleChange} placeholder="First Name" />
          <input type="text" name="lname" value={formData.lname} onChange={handleChange} placeholder="Last Name" />
        </div>
        <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
        <textarea type="text" name="message" value={formData.message} onChange={handleChange} placeholder="Message" rows={3} />

        <button type="submit">SEND</button>
      </form>
    </div>
  );
};

export default ContactForm;
