import { Button } from "@/components/ui/button";
import HomeVideo from "@/components/Videos/HomeVideo";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="">
      <HomeVideo />
      <div className="lg:mx-20 md:mx-10 mx-5 sm:my-10 my-5 ">
        <div>
          <h2 className="sm:text-5xl text-3xl text-center sm:p-5 p-2">
            You Are Welcome!
          </h2>
          <p>
            Welcome to Safe PICC Plus Inc., where patient care and safety are
            our top priorities. We are committed to excellence and specialize in
            providing high-quality PICC line, Midline, and Peripheral IV
            insertion services. Our expert team of registered nurses is
            dedicated to ensuring that patients receive the best possible care
            in various settings, whether at home, in hospitals, or in other
            healthcare facilities.
          </p>
          <p className="sm:my-5 my-2">
            At Safe PICC Plus, we understand the importance of precision and
            expertise in vascular access. Our nurses are highly trained and
            certified, bringing years of experience and knowledge to each
            procedure, ensuring not only the safety of our patients but also
            their comfort and peace of mind.
          </p>
          <p>
            We pride ourselves on our flexibility and responsiveness. We tailor
            our services to meet the unique needs of each patient and healthcare
            provider. Our innovative approach and commitment to quality care set
            us apart in the industry.
          </p>
          <p className="sm:my-5 my-2">
            Explore our services and how we can assist you or your loved ones
            with safe and effective vascular access solutions—Trust Safe PICC
            Plus for compassionate care, expertise, and a commitment to
            improving patient outcomes.
          </p>
        </div>

        <div className="home-box-shadow sm:p-10 p-5 sm:mt-10 mt-5 mb-5">
          <h2 className="sm:text-4xl text-2xl text-center ">
            Why Use Safe PICC Plus Inc.?
          </h2>
          <p className="sm:py-5 py-3">
            Why Use Safe PICC Plus Inc.? At Safe PICC Plus Inc., we are your
            trusted partner in vascular access care, committed to delivering
            safe, precise, and compassionate services. Our experienced team
            ensures high-quality catheter insertions and IV access, prioritizing
            patient comfort, safety, and efficiency. With a focus on excellence
            and reliability, we tailor our services to meet the unique needs of
            each patient and healthcare provider.
          </p>

          <ul>
            <li>
              <span>Expert Care: </span>
              Our team of certified nurses has years of experience and
              specialized training, ensuring safe and effective catheter
              insertions every time.
            </li>
            <li>
              <span>Patient-Centric Approach: </span>
              We prioritize your comfort and well-being, providing compassionate
              care tailored to your needs.
            </li>
            <li>
              <span>Flexible Services: </span>
              Whether you require a PICC line, Midline, or Peripheral IV, we
              offer mobile services that fit seamlessly into your schedule and
              location.
            </li>
            <li>
              <span>Commitment to Safety: </span>
              We utilize the latest techniques and adhere to strict
              sterilization protocols to minimize the risk of complications and
              infections.
            </li>
            <li>
              <span>Quality You Can Trust: </span>
              Our proven track record of successful procedures and satisfied
              patients speaks volumes about our dedication to excellence.
            </li>
            <li>
              <span>Convenience at Your Doorstep: </span>
              Experience the ease of receiving expert vascular access services
              in the comfort of your home or chosen facility.
            </li>
            <li>
              <span>Improved Quality of Life: </span>
              We empower patients through reliable access to IV therapy, helping
              to enhance overall treatment experiences and outcomes.
            </li>
            <li>
              <span>Transparent Communication: </span>
              We keep you informed every step of the way, ensuring you have the
              knowledge and support needed for a smooth process.
            </li>
          </ul>
        </div>

        <Link href="/services" className="my-2">
          <Button>Check Out Our Services</Button>
        </Link>
      </div>
    </div>
  );
}
