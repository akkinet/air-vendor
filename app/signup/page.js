"use client";

import { useState } from "react";
import * as Auth from "@aws-amplify/auth";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationCode, setConfirmationCode] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await Auth.signUp({
        username: email, // Pass email as the username
        password,
        attributes: { email },
      });
      setIsConfirmed(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleConfirmSignup = async (e) => {
    e.preventDefault();
    try {
      console.log("Username:", email);
      console.log("Confirmation Code:", confirmationCode);

      await Auth.confirmSignUp(email, confirmationCode);
      window.location.href = "/login"; // Redirect after confirmation
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      {!isConfirmed ? (
        <form onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign Up</button>
        </form>
      ) : (
        <form onSubmit={handleConfirmSignup}>
          <input
            type="text"
            placeholder="Confirmation Code"
            value={confirmationCode}
            onChange={(e) => setConfirmationCode(e.target.value)}
          />
          <button type="submit">Confirm Sign Up</button>
        </form>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
