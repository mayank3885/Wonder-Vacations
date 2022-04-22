import React from "react";
import styles from "./contact.module.css";

function Contact() {
  return (
    <div className={styles.contact0}>
    <div className={styles.cont}>
      <div className={styles.contact1}>
        <div className={styles.heading}>CONTACT US</div>
        <div className={styles.names}>
          <ul>Karan Makwana<p>nai milega</p></ul>
          <ul>Javed Hussain<p>nai milega</p></ul>
        </div>
        <div className={styles.social1}>
          <ul>
            <li>Email – wondervacation7@gmail.com</li>
            <li>Facebook –
            <a
              href="https://www.facebook.com/Wonder-Vacations-119312793089596/"
              className="social-icon-link facebook"
              target="_blank"
              aria-label="Facebook"
              rel="noreferrer"
            > https://www.facebook.com/Wonder-Vacations-119312793089596/</a>
            </li>
            <li>
              Instagram –
              <a
              href="https://www.instagram.com/wonder__vacations/"
              className="social-icon-link facebook"
              target="_blank"
              aria-label="Facebook"
              rel="noreferrer"
            > https://www.instagram.com/wonder__vacations/</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Contact;
