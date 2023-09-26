import React, { useState } from "react";
import vg from "../assets/vg1.png";
import toast from "react-hot-toast";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

const Contact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);
  const submitHandler = async (e) => {
    e.preventDefault();
    setDisableBtn(true);
    try {
      await addDoc(collection(db, "contacts"), { name, email, message });
      setname("")
      setemail("")
      setmessage("")
      toast.success("Message Sent");
      setDisableBtn(false);
    } catch (error) {
      toast.error("Failed");
      setDisableBtn(false);

    }
  };

  return (
    <div id="contact">
      <section>
        <form onSubmit={submitHandler}>
          <h2>Contact Me</h2>
          <input
            value={name}
            onChange={(e) => setname(e.target.value)}
            type="text"
            placeholder="Your Name"
            required
          />
          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            type="email"
            placeholder="Your Email"
            required
          />
          <input
            value={message}
            onChange={(e) => setmessage(e.target.value)}
            type="text"
            placeholder="Your message"
            required
          />
          <button disabled={disableBtn} className={disableBtn? "disableBtn" : ""} type="submit">
            Send
          </button>
        </form>
      </section>

      <aside>
        <img src={vg} alt="dd" />
      </aside>
    </div>
  );
};

export default Contact;
