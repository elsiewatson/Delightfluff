import React, { useState } from "react";

const ContactForm = () => {
  // State to hold form values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comments: "",
  });

  // State to hold error messages for each field
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    comments: "",
  });

  // State to handle form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  // OnChange handler to update form data
  const handleChange = (event) => {
    const { name, value } = event.target;

    // Update the form data
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Validate the input and update errors
    setErrors((prevErrors) => {
      const updatedErrors = { ...prevErrors };

      // Validation logic
      if (name === "name") {
        updatedErrors.name = value.trim() ? "" : "Name is required";
      } else if (name === "email") {
        if (!value.trim()) {
          updatedErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          updatedErrors.email = "Email address is invalid";
        } else {
          updatedErrors.email = "";
        }
      } else if (name === "phone") {
        if (!value.trim()) {
          updatedErrors.phone = "Phone number is required";
        } else if (!/^\d{10}$/.test(value)) {
          updatedErrors.phone = "Phone number must be 10 digits";
        } else {
          updatedErrors.phone = "";
        }
      } else if (name === "comments") {
        updatedErrors.comments = value.trim() ? "" : "Message is required";
      }

      return updatedErrors;
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true); // Disable submit button and change text
    setFormStatus(""); // Clear previous status message

    // Inline validation
    let isValid = true;
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
      isValid = false;
    }

    if (!formData.comments.trim()) {
      newErrors.comments = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);

    if (!isValid) {
      setIsSubmitting(false);
      return;
    }

    try {
      // Send data to the API
      const response = await fetch("https://acomal.top/send-mail/84/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          comments: "",
        });
        setErrors({}); // Reset errors after successful form submission
      } else {
        setFormStatus("Failed to send the message.");
      }
    } catch (error) {
      setFormStatus("Failed to send the message.");
    }

    setIsSubmitting(false); // Reset submitting state
  };

  return (
    <>
      <form className="contact-form" onSubmit={handleFormSubmit}>
        <div className="row">
          <div className="col-lg-12">
            <div className="form-group">
              <input
                className="form-control"
                id="name"
                name="name"
                placeholder="Name*"
                type="text"
                value={formData.name}
                onChange={handleChange}
                autoComplete="off"
              />
              {errors.name && (
                <span className="alert-error">{errors.name}</span>
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <input
                className="form-control"
                id="email"
                name="email"
                placeholder="Email*"
                type="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="off"
              />
              {errors.email && (
                <span className="alert-error">{errors.email}</span>
              )}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <input
                className="form-control"
                id="phone"
                name="phone"
                placeholder="Phone*"
                type="text"
                value={formData.phone}
                onChange={handleChange}
                autoComplete="off"
              />
              {errors.phone && (
                <span className="alert-error">{errors.phone}</span>
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="form-group comments">
              <textarea
                className="form-control"
                id="comments"
                name="comments"
                placeholder="Your Message*"
                value={formData.comments}
                onChange={handleChange}
                autoComplete="off"
              />
              {errors.comments && (
                <span className="alert-error">{errors.comments}</span>
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <button
              type="submit"
              name="submit"
              id="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span>Sending...</span>
              ) : (
                <i className="fa fa-paper-plane"> Get in Touch</i>
              )}
            </button>
          </div>
        </div>
        <div className="col-lg-12 alert-notification">
          <div id="message" className="alert-msg">
            {formStatus}
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
