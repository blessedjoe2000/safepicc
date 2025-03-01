import ContactForm from "@/components/ContactForm/ContactForm";
import ContactHeader from "@/components/ImageHeader/ContactHeader";
import SocialMedia from "@/components/SocialMedia/SocialMedia";
import { Clock10, Mail, Smartphone } from "lucide-react";

const Contact = () => {
  return (
    <div>
      <ContactHeader />
      <div className="lg:mx-20 md:mx-10 mx-5 sm:my-10 my-5">
        <h2 className="sm:text-5xl text-3xl text-center sm:p-5 p-2">
          Get in Touch
        </h2>
        <p className="sm:mb-4 mb-2">
          We're here to help! We appreciate your feedback and inquiries. Whether
          you have questions about our services, need assistance, or are
          interested in joining our team, feel free to reach out—we're always
          happy to connect with you.
        </p>
        <div className="flex sm:flex-row flex-col item-center gap-5 justify-around sm:py-10 py-5">
          <div className="flex justify-center items-center flex-col ">
            <div className="flex items-center justify-center gap-2 pb-2">
              <Clock10 color="#A1E3F9" />
              <p className="">
                Office Hours: Monday to Friday, 9AM - 5PM (CST)
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 pb-2">
              <Smartphone color="#A1E3F9" />
              <p className="">(281) 633-6060</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Mail color="#A1E3F9" />
              <p className="">info@safepicc.com</p>
            </div>
          </div>
          <div>
            <SocialMedia />
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
