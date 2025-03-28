import ConsultancyHeader from "@/components/ImageHeader/ConsultancyHeader";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const Consultancy = () => {
  return (
    <div>
      <ConsultancyHeader />
      <div className="lg:mx-20 md:mx-10 mx-5 sm:my-10 my-5">
        <h2 className="sm:text-5xl text-3xl text-center sm:p-5 p-2">
          We Are Here To Serve You
        </h2>
        <p className="sm:mb-4 mb-2">
          we provide professional consultancy services to healthcare facilities
          and professionals, offering expert guidance on best practices,
          informed decision-making, and optimized patient care. Our team ensures
          that providers receive the knowledge and training needed to enhance
          procedures, improve patient outcomes, and maintain the highest
          standards of care.
        </p>
        <p className="sm:mb-4 mb-2">
          <span>Clinical Consultations: </span>
          We offer expert advice on vascular access strategies, helping
          healthcare providers make informed decisions for their patients.
        </p>
        <p className="sm:mb-4 mb-2">
          <span>Policy Development: </span>
          Assistance in creating and implementing vascular access and catheter
          care protocols to enhance patient safety and compliance with best
          practices.
        </p>
        <p className="sm:mb-4 mb-2">
          <span>Quality Improvement Initiatives: </span>
          Support the development and execution of quality improvement projects
          to optimize vascular access services within healthcare settings.
        </p>
        <p className="sm:mb-4 mb-2">
          <span>PICC Line Insertions: </span>
          Our skilled nurses perform safe and efficient peripherally inserted
          central catheter (PICC) insertions, which are ideal for long-term IV
          therapy.
        </p>
        <p className="sm:mb-4 mb-2">
          <span>Midline Catheter Insertions: </span>
          We provide Midline catheter services for patients requiring short to
          medium-term access, ensuring minimal discomfort and effective
          treatment.
        </p>
        <p className="mb-10 ">
          <span>Peripheral IV Access: </span>
          We offer quick and reliable peripheral IV placements for immediate
          therapeutic needs, customized for each patient's situation.
        </p>
      </div>
    </div>
  );
};

export default Consultancy;
