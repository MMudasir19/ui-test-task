import React, { FC } from "react";
import styles from "../styles/Contact.module.css";

const Contact: FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Contact Us</h1>
      </header>

      <section className={styles.content}>
        <h2>Get in Touch</h2>
        <p>
          If you have any questions, feel free to reach out to us. We would love
          to hear from you!
        </p>
        <p>
          You can contact us by email at{" "}
          <a href="mailto:info@website.com">info@website.com</a>.
        </p>
      </section>

      <footer className={styles.footer}>
        <p>Thank you for visiting our website!</p>
      </footer>
    </div>
  );
};

export default Contact;
