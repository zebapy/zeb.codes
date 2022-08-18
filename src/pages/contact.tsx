import { FormEvent, useState } from "react";
import { PageHeader } from "src/components/PageHeader";
import { Alert } from "../components/Alert";

type ContactState = "idle" | "loading" | "sent" | "error";

export default function ContactPage() {
  const [state, setState] = useState<ContactState>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const username = data.get("username"); // honeypot
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");

    try {
      setState("loading");

      const resp = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          name,
          email,
          message,
        }),
      });

      if (!resp.ok) {
        const { error } = (await resp.json()) as { error: string };
        throw new Error(error);
      }

      setState("sent");
    } catch (err) {
      setState("error");
    }
  }

  const form = (
    <form onSubmit={onSubmit}>
      {/* honeypot: users should not submit this */}
      <div hidden>
        <label htmlFor="username">username</label>
        <input type="text" name="username" hidden />
      </div>

      <div className="form-item">
        <label htmlFor="name" className="label">
          Name
        </label>
        <input type="text" name="name" required className="input" />
      </div>
      <div className="form-item">
        <label htmlFor="email" className="label">
          Email
        </label>
        <input type="email" name="email" required className="input" />
      </div>
      <div className="form-item">
        <label htmlFor="message" className="label">
          Message
        </label>
        <textarea name="message" required className="input" />
      </div>
      <div className="form-item">
        <button type="submit" className="btn" disabled={state === "loading"}>
          {state === "loading" ? "Sending..." : "Send message"}
        </button>
      </div>
    </form>
  );

  const sentMessage = (
    <Alert
      status="success"
      title="Message sent!"
      message="I'll follow up soon."
    />
  );

  const errorMessage = (
    <Alert
      status="error"
      title="Uh oh!"
      message="Something went wrong sending your message. Please try again another time."
    />
  );

  const contentStates = {
    idle: form,
    loading: form,
    sent: sentMessage,
    error: errorMessage,
  };

  return (
    <div className="max-w-4xl container">
      <PageHeader
        title="Contact"
        intro="Want to chat or work with me? Reach out and I'll get back to you when I can."
      />

      {contentStates[state]}
    </div>
  );
}
