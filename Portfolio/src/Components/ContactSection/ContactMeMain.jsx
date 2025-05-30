import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";

const ContactMeMain = () => {
  return (
    <div
      id="contact"
      className="max-w-[1200px] items-center mx-auto px-4 justify-center"
    >
      <div>
        <h1 className="text-center text-cyan text-6xl mt-[100px] ">
          Contact Me
        </h1>
      </div>
      <div className="flex bg-brown justify-between gap-24 p-8 rounded-2xl md:flex-row sm:flex-col items-center">
        <ContactMeLeft />
        <ContactMeRight />
      </div>
    </div>
  );
};

export default ContactMeMain;
