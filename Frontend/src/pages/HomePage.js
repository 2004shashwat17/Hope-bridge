import { useState } from "react";
import { Header } from "../components/Header";
import { Counter } from "../components/Counter";

export function HomePage() {
    const [to, setTo] = useState("");
    const [subject, setSubject] = useState("");
    const [text, setText] = useState("");
    const [status, setStatus] = useState("");

    const handleSendMail = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        try {
            const response = await fetch("http://localhost:5000/send-mail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ to, subject, text })
            });
            const data = await response.json();
            if (response.ok) {
                setStatus("Mail sent successfully!");
            } else {
                setStatus("Error: " + data.error);
            }
        } catch (err) {
            setStatus("Error: " + err.message);
        }
    };

    return (
        <main>
            <h1>Send Mail</h1>
            <form onSubmit={handleSendMail} style={{ marginBottom: 24 }}>
                <div>
                    <label>To: </label>
                    <input type="email" value={to} onChange={e => setTo(e.target.value)} required />
                </div>
                <div>
                    <label>Subject: </label>
                    <input type="text" value={subject} onChange={e => setSubject(e.target.value)} required />
                </div>
                <div>
                    <label>Message: </label>
                    <textarea value={text} onChange={e => setText(e.target.value)} required />
                </div>
                <button type="submit">Send Mail</button>
            </form>
            {status && <div>{status}</div>}
            <Header heading="Word Counter" subHeading="To use WordCounter, Paste text in the given textarea box below" />
            <Counter />
        </main>
    );
}