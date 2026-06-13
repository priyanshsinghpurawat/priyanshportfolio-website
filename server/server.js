import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS setup: allow local development and your production domain
const allowedOrigins = [
  "http://localhost:8080",
  "http://localhost:5173",
  "http://localhost:3000",
  "https://priyanshsinghpurawat.github.io",
  // Add any other domains you plan to host the portfolio on
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Blocked by CORS policy"));
    }
  },
  credentials: true
}));

app.use(express.json());

// API Health Check
app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Portfolio Backend is running." });
});

// Contact Form Endpoint
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  // 1. Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Please fill out all fields (name, email, message)."
    });
  }

  // Simple email regex validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Please provide a valid email address."
    });
  }

  try {
    // 2. Configure SMTP Transporter
    // Supported hosts: Gmail, Outlook, Resend, SendGrid, custom SMTP, etc.
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true", // true for port 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // Your email address
        pass: process.env.SMTP_PASS, // Your email app password (not your main password)
      },
    });

    // 3. Setup Email Structure
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`, // Sent from your address (to avoid spam filters)
      replyTo: email, // Direct replies will go to the sender's email
      to: process.env.RECEIVER_EMAIL || process.env.SMTP_USER, // Where you want to receive the messages
      subject: `💼 New Portfolio Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333; line-height: 1.6; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #f8fafc;">
          <h2 style="color: #0d9488; margin-top: 0; border-bottom: 2px solid #0d9488; padding-bottom: 8px;">New Contact Message</h2>
          <p><strong>From:</strong> ${name} (&lt;${email}&gt;)</p>
          <hr style="border: 0; border-top: 1px solid #cbd5e1; margin: 20px 0;" />
          <p style="white-space: pre-wrap; font-size: 15px; color: #475569; background: #ffffff; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0;">${message}</p>
          <hr style="border: 0; border-top: 1px solid #cbd5e1; margin: 20px 0;" />
          <p style="font-size: 12px; color: #94a3b8; margin-bottom: 0;">Sent automatically from your developer portfolio website.</p>
        </div>
      `,
    };

    // 4. Send the email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: "Your message has been sent successfully!"
    });
  } catch (error) {
    console.error("Nodemailer error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error: Failed to send the email. Please try again later."
    });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
