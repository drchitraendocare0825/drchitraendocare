import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send({ message: "Only POST requests allowed" });
  }

  const {
    name, phone, dob, gender, city, service, appointmentDate, time,
  } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.SMTP_TO,
    subject: `New Appointment Booking: ${name}`,
    html: `
      <h2>Appointment Details</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>DOB:</strong> ${dob}</p>
      <p><strong>Gender:</strong> ${gender}</p>
      <p><strong>City:</strong> ${city}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Date:</strong> ${appointmentDate}</p>
      <p><strong>Time:</strong> ${time}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Appointment booked successfully!" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ message: "Error sending appointment email." });
  }
}
