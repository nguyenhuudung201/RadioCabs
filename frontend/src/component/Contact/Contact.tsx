import HeaderCom from "../Header/HeaderCom";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "./Contact.css";
const Contact = () => {
  return (
    <>
      <section className="container-full relative">
        <HeaderCom h2="Contact Us" p="Feel free to keep in touch" />
      </section>
      <section className="container flex my-[100px] mx-auto gap-2">
        <div className="w-1/2">
          <div>
            <h1 className="text-xl font-light pb-5">Send us a Message</h1>
            <h4 className="text-6xl font-semibold">Let's talk</h4>
          </div>
          <div>
            <form action="">
              <div className="flex gap-2">
                <Input name="Name" />
                <Input name="Company" />
              </div>
              <div className="flex gap-2">
                <Input name="Phone" />
                <Input name="Email" />
              </div>
              <div>
                <Input name="Subject" />
              </div>
              <div>
                <Input name="Message" />
              </div>
              <div className="mt-5">
                <Button name="Send message" />
              </div>
            </form>
          </div>
        </div>
        <div className="w-1/2 relative">
          <div className="bg-contact"></div>
          <div className="absolute mx-auto text-left  right-0 top-[50px] w-[90%]	">
            <div className="mb-3">
              <h4 className="text-5xl font-semibold pb-2">Get in touch.</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
            <div className="pt-5">
              <h1 className=" text-xl font-semibold">Address</h1>
              <h4>Jln cempaka wangi No 22, Jakarta - Indonesia</h4>
            </div>
            <div className="pt-5">
              <h1 className=" text-xl font-semibold">Call Us</h1>
              <h4>+6221 2002-2012</h4>
            </div>
            <div className="pt-5">
              <h1 className=" text-xl font-semibold">Email Us</h1>
              <h4>support@yourdomain.tld</h4>
              <h4>sales@yourdomain.tld</h4>
            </div>
            <div className="pt-5">
              <h4>
                For more information or any spesific questions, you can contact
                us directly by phone or you can visit our help center page.
              </h4>
            </div>
          </div>
        </div>
      </section>
      <section className="container-full mt-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d79473.49343207218!2d-0.11951900000000001!3d51.503186!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2zTeG6r3QgTHXDom4gxJDDtG4!5e0!3m2!1svi!2sus!4v1710037353034!5m2!1svi!2sus"
          width="100%"
          height="450"
        ></iframe>
      </section>
    </>
  );
};

export default Contact;
