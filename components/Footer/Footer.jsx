import Link from "next/link";
import SocialMedia from "../SocialMedia/SocialMedia";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="flex sm:flex-row flex-col justify-around items-center gap-5 sm:p-10 p-5 ">
        <div className="flex flex-col justify-center items-center gap-5">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/education">Education</Link>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <Link href="/contact">Contact Us</Link>
          <Link href="/consultancy">Consent</Link>
          <Link href="/collaborate">Collaboration</Link>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <Link href="/consultancy">Consultation</Link>
          <Link href="/volunteering">Volunteering</Link>

          <Link href="/courses">Courses</Link>
        </div>
        <SocialMedia />
      </div>
      <div className=" border-t-2 text-center py-5  ">
        <p className="">
          Safe PICC Inc. ©{new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
