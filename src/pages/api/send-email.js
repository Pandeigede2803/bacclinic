
import { Resend } from "resend";
import ReactDOMServer from "react-dom/server";
import MyEmailComponent from "../../components/MyEmailComponent"; // Adjust the path as per your project structure

export default async function sendEmail(req, res) {
  if (req.method === "POST") {
    // Logic to send email using Resend or a similar service
    // Your existing POST request handling code here...
    console.log("Receiving email send request");
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { to, subject, message, name } = req.body;
    console.log("Email Data:", to, subject, message);

    const emailHtml = ReactDOMServer.renderToString(
      <MyEmailComponent name={name} message={message} email={to} />
    );

    console.log("Email HTML:", emailHtml);

    try {
      await resend.emails.send({
        from: `noreply@${process.env.EMAIL_FROM}`,
        to: to, // Changed to use the `to` variable from request body
        subject: subject,
        html: emailHtml,
      });

      console.log("Email sent successfully");
      res.status(200).json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ success: false, message: "Failed to send email." });
    }
  } else {
    // Handle non-POST requests here
    res.setHeader("Allow", ["POST"]);
    res.status(405).send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Send Email API</title>
        </head>
        <body>
          <h1>Send Email API Endpoint</h1>
          <p>This API endpoint is for sending emails and only accepts POST requests.</p>
        </body>
      </html>
    `);
  }
}
