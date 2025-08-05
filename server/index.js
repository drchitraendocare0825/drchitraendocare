// index.js
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json()); 

// Setup mail transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Verify transporter
transporter.verify((error, success) => {
  if (error) console.error("Transporter verification failed:", error);
  else console.log("Transporter is ready to send mail");
});

app.post("/api/appointment", async (req, res) => {
  const {
    name,
    phone,
    dob,
    gender,
    city,
    service,
    appointmentDate,
    time,
  } = req.body;

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.SMTP_TO, // clinic/admin email
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
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
