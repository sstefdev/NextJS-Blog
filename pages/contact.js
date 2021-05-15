import Head from "next/head";
import ContactFrom from "../components/ContactPage/ContactForm";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact me</title>
        <meta name="description" content="Send me your messages" />
      </Head>
      <ContactFrom />
    </>
  );
};

export default ContactPage;
