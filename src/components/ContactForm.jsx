import React, { useState } from "react";

const ContactForm = () => {
  const [emailData, setEmailData] = useState({
    name: "",
    to: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Logging to indicate the function has started
    console.log("Sending email...");
  
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      });
  
      const result = await response.json();
  
      // Logging the result to see what the server responded with
      console.log("Response from the server: ", result);
  
      if (result.success) {
        alert("Email berhasil dikirim");
        console.log("Email sent successfully.");
        // Optionally reset the form state here if needed
      } else {
        alert("Gagal mengirim email");
        console.log("Failed to send email.");
      }
    } catch (error) {
      // Logging any errors that occur during the fetch or while handling the response
      console.error("Error sending email: ", error);
      alert("An error occurred while sending the email.");
    }
  };
  
  return (
    <section className="bg-white font-primary">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
          Experiencing skin concerns or interested in our beauty treatments?
          Want to share your thoughts on our services or curious about our
          wellness programs? We&apos;re here to help you glow.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={emailData.name}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label htmlFor="to" className="block mb-2 text-sm font-medium text-gray-900">
              Your Email
            </label>
            <input
              type="email"
              id="to"
              name="to"
              value={emailData.to}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="name@mail.com"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={emailData.subject}
              onChange={handleChange}
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={emailData.message}
              onChange={handleChange}
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Leave a comment..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-secondary sm:w-fit hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:scale-105 transform transition duration-150 ease-in-out"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
