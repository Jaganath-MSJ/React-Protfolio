import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import contact from "./../img/contact.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadset,
  faUser,
  faEnvelope,
  faPhoneAlt,
  faCommentDots,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState();

  const handleSubmitToSendMail = async (e) => {
    e.preventDefault();
    try {
      const templateParams = {
        from_mail: email,
        name: name,
        message: message,
        contact: `email : ${email} ${phone ? `and phone : ${phone}` : ""}`,
      };
      const result = await emailjs.send(
        "service_oovklos",
        "template_d32swih",
        templateParams,
        "f0DXl-qv80B9XXFLP"
      );

      if (result.status === 200) {
        setResponseMessage("Email sent successfully");
      } else {
        setResponseMessage("Failed to send email");
      }
    } catch (err) {
      setResponseMessage("Failed to send email");
    }
  };

  return (
    <Section id="Contact">
      <h1>
        <FontAwesomeIcon icon={faHeadset} /> Contact
      </h1>
      <div>
        <div className="conatctImage">
          <img src={contact} alt="Contact" draggable="false" />
        </div>
        <div className="contactForm">
          <form onSubmit={handleSubmitToSendMail}>
            <div className="contactInput">
              <span>
                <FontAwesomeIcon icon={faUser} />
              </span>
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="contactInput">
              <span>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="contactInput">
              <span>
                <FontAwesomeIcon icon={faPhoneAlt} />
              </span>
              <input
                type="phone"
                name="phone"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="contactInput">
              <span>
                <FontAwesomeIcon icon={faCommentDots} />
              </span>
              <textarea
                type="text"
                name="message"
                placeholder="Message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="submitConform">
              <p>{responseMessage}</p>
              <div className="contactSubmit">
                <button type="submit">
                  Submit &nbsp;
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 3rem 10%;
  padding-bottom: 7rem;
  height: auto;
  & > h1 {
    text-align: center;
    font-size: 3rem;
  }
  & > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 1rem;
    background-color: rgba(220, 220, 220, 0.5);
    border-radius: 1rem;
    .conatctImage > img {
      width: 25rem;
      height: 25rem;
      opacity: 1;
    }
    .contactForm > form {
      .contactInput {
        display: flex;
        flex-wrap: nowrap;
        margin: 1rem 0;
        background-color: #f7f7f7;
        border: 1px solid black;
        border-radius: 0.3rem;
        padding: 0.2rem 0.5rem;
        & > span {
          font-size: 1.2rem;
          margin: 0.3rem;
          color: rgb(194, 189, 190);
        }
        & > input,
        & > textarea {
          background: transparent;
          border: none;
          outline: none;
          font-size: 1.1rem;
          width: 30rem;
          height: 2rem;
          padding-left: 0.7rem;
        }
        & > textarea {
          height: 5.5rem;
        }
      }
      .submitConform {
        display: flex;
        justify-content: space-between;
        .contactSubmit {
          & > button {
            width: 8rem;
            height: 3rem;
            font-size: 1.1rem;
            color: #f7f7f7;
            background-color: dodgerblue;
            border: none;
            border-radius: 0.5rem;
            cursor: pointer;
            transition: 0.3s ease-in-out;
            &:hover {
              color: black;
              box-shadow: 5px 5px 5px rgba(81, 81, 81, 0.5);
            }
          }
        }
        & > p {
          margin-top: 0;
          font-weight: bold;
          font-size: large;
        }
      }
    }
    @media only screen and (max-width: 680px) {
      .conatctImage > img {
        width: 15rem;
        height: 15rem;
      }
      .contactForm > form > .contactInput {
        & > input,
        & > textarea {
          width: 100%;
        }
      }
    }
  }
`;

export default Contact;
