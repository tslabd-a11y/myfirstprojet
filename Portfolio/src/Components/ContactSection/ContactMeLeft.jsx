import ContactForm from "./ContactForm";

const ContactMeLeft = () => {
  return (
    <div>
      <div>
        <h2 className="text-orange text-3xl font-special mb-4">Get In Touch</h2>
        <p className="text-white text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br /> quam dolorem mollitia enim.
        </p>
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactMeLeft;
