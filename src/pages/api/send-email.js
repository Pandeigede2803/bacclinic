// pages/api/send-email.js
import { Resend } from "resend";
import ReactDOMServer from "react-dom/server";
import MyEmailComponent from "../../components/MyEmailComponent"; // Sesuaikan path sesuai struktur proyekmu

export default async function sendEmail(req, res) {
  if (req.method === "POST") {
    // Logika untuk mengirim email menggunakan Resend atau layanan serupa

    // Menambahkan console log untuk memantau aliran proses
    console.log("Menerima permintaan pengiriman email");

    // Inisialisasi Resend dengan API key
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Extract 'name' from request body alongside 'to', 'subject', and 'message'
    const { to, subject, message, name } = req.body;

    // Menampilkan data email yang akan dikirim di console log
    console.log("Email Data:");
    console.log("To:", to);
    console.log("Subject:", subject);
    console.log("Message:", message);



    const emailHtml = ReactDOMServer.renderToString(
      <MyEmailComponent name={name} message={message} email={to} />
    );
    
    // Menampilkan HTML email yang akan dikirim di console log
    console.log("Email HTML:");
    console.log(emailHtml);

    try {
      // Gunakan Resend untuk mengirim email
      await resend.emails.send({
        from: `noreply@${process.env.EMAIL_FROM}`, // Dynamically add "noreply@" prefix
        to: "bacclinicbali@gmail.com",// Dynamically add "
        subject: subject,
        html: emailHtml, // Use `html` for HTML content or `message` for plain text
      });

      // Menampilkan pesan sukses di console log
      console.log("Email berhasil dikirim");

      res
        .status(200)
        .json({ success: true, message: "Email berhasil dikirim!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res
        .status(500)
        .json({ success: false, message: "Gagal mengirim email." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
