import ContactCard from "../component/ContactCard";
import ContactForm from "../component/ContactForm";
import styles from "./contact.module.css";

const contact = () => {
  return (
    <>
      <h2>This is contact page</h2>

      <div className={styles.container}>
        <h1>Contact Us</h1>
        <ContactCard />

        <section className={styles.contact_section}>
          <h2>
            We'd love to hear <span> from you </span>
          </h2>

          <ContactForm />
        </section>
      </div>


      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29432.36042747584!2d75.90246741795737!3d22.763709228757584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631d69bd0bc1c7%3A0x765af00fe6837137!2sNipania%2C%20Indore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1682595775152!5m2!1sen!2sin" width={100} height={450} style={{border:0}}  loading="lazy" referrerpolicy="no-referrer-when-downgrade" className={styles.mapping}></iframe>

    </>
  );
};

export default contact;
