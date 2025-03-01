"use client";

import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Button } from "../ui/button";

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  const handleContactUs = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName) {
      return toast.error("Name is required. Please enter first and last name");
    }

    if (!email) {
      return toast.error("Email is required. Please enter email");
    }

    if (!mobile) {
      return toast.error("Phone number is required. Please enter phone number");
    }

    if (!message) {
      return toast.error("Message is required, Please enter a message");
    }

    const response = await axios.post("/api/send", {
      firstName,
      lastName,
      email,
      mobile,
      message,
    });

    if (response.status === 200) {
      setFirstName(" ");
      setLastName(" ");
      setEmail(" ");
      setMobile(" ");
      setMessage(" ");
      toast.success(`Hi ${firstName}, message sent successfully`);
    }
  };
  return (
    <div className="">
      <form onSubmit={handleContactUs} className=" pb-10 p-5 mx-5 mb-5">
        <div className="sm:flex justify-between gap-2">
          <div className="w-full">
            <label htmlFor="firstName" name="firstName">
              First Name
            </label>
            <input
              type="text"
              placeholder="Enter First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="w-full">
            <label htmlFor="lastName" name="lastName">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Enter Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>

        <div className="sm:flex justify-between gap-2">
          <div className="w-full">
            <label htmlFor="email" name="email">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="w-full">
            <label htmlFor="mobile" name="mobile">
              Phone Number
            </label>
            <input
              type="number"
              placeholder="Enter Phone Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" name="message">
            What can we help you with?
          </label>
        </div>
        <textarea
          name="message"
          id=""
          cols="10"
          rows="5"
          placeholder="Enter message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
}
