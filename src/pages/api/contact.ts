import sendgrid from "@sendgrid/mail";
import { NextApiHandler } from "next";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

type ContactResponse = {
  error?: string;
  message?: string;
};

const handler: NextApiHandler<ContactResponse> = async (req, res) => {
  if (req.method !== "POST") return;

  const { name, email, message, username } = req.body as {
    name?: string;
    email?: string;
    message?: string;
    username?: string;
  };

  // honeypot
  if (username?.trim().length > 0) {
    res
      .status(400)
      .json({ message: "Username is meant for bots. Are you one?" });
    return;
  }

  if (!email || !email.trim()) {
    return res.status(400).json({
      error: "Email is required",
    });
  }

  if (!name || !name.trim()) {
    return res.status(400).json({
      error: "Name is required",
    });
  }

  if (!message || !message.trim()) {
    return res.status(400).json({
      error: "Message is required",
    });
  }

  const emailTo = process.env.EMAIL_TO;

  if (!emailTo) {
    return res.status(500).json({
      error: "Email to send to is not configured",
    });
  }

  const now = new Date().toLocaleDateString();

  try {
    const messageConfig = {
      to: emailTo,
      from: email,
      replyTo: email,
      subject: `zeb.codes contact form - ${name}`,
      text: `Name: ${name}
Email: ${email}
---

${message}

---
Posted: ${now}
`,
    };

    await sendgrid.send(messageConfig);

    res.status(200).json({ message: "Sent email" });
  } catch (error) {
    console.error(error, error.response?.body);

    res.status(error.statusCode || 500).json({ error: "Failed to send email" });
  }
};

export default handler;
