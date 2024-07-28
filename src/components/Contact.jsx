import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    console.log("Form submitted:", formData);

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    alert("Message sent successfully!");
  };

  return (
    <>
      <main className="main-content">
        <article className="container my-5">
          <h3 className="mx-3 head">Send me a message 📧</h3>
          <form className="my-4" onSubmit={handleSubmit}>
            <input
              className="mx-3 my-3 ip-txt"
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              className="mx-3 my-3 ip-txt"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              className="mx-3 my-3 ip-txt"
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <div className="my-3 mx-3">
              <textarea
                className="ip-txt txt-area"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button className="btn mx-3" type="submit">
              Submit
            </button>
          </form>
        </article>
      </main>
    </>
  );
};

export default Contact;
