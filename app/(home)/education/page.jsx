import EducationHeader from "@/components/ImageHeader/EducationHeader";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const education = () => {
  return (
    <div>
      <EducationHeader />
      <div className="lg:mx-20 md:mx-10 mx-5 sm:my-10 my-5">
        <h2 className="sm:text-5xl text-3xl text-center sm:p-5 p-2">
          Education is Key
        </h2>
        <p className="sm:mb-4 mb-2">
          At Safe PICC Plus Inc., we believe education is the foundation of safe
          and effective patient care. Our comprehensive training programs are
          designed for healthcare professionals seeking to enhance their
          expertise in vascular access through best practices, advanced
          techniques, and the latest innovations. Whether you are a nurse,
          physician, or allied health professional, our hands-on training and
          evidence-based curriculum provide the skills and confidence needed to
          excel in patient care. Through interactive learning, expert-led
          workshops, and real-world case studies, we empower healthcare
          providers to deliver high-quality, safe, and efficient vascular access
          services, ensuring the best outcomes for their patients.
        </p>

        <h2 className="sm:text-4xl text-2xl text-center sm:p-5 p-2">
          Classes Offered
        </h2>
        <p className="sm:mb-4 mb-2">
          We are dedicated to empowering both patients and healthcare
          professionals through comprehensive education. Our Patient Education
          Programs provide informative sessions on the use, care, and
          maintenance of PICC and Midline catheters, ensuring patients feel
          confident and well-informed about their treatment. For healthcare
          providers, our specialized training workshops focus on best practices
          in vascular access, catheter management, and infection control,
          equipping medical teams with the knowledge and skills needed to
          deliver safe and effective care.
        </p>

        <div className="flex lg:flex-row  flex-col sm:gap-5 gap-2 justify-center items-stretch w-full my-5">
          <div className="box-shadow p-5">
            <h2 className="sm:text-3xl text-xl text-center py-2">
              4-Hour Peripheral IV Therapy Class
            </h2>

            <div className="w-full h-[400px] ">
              <Image
                src="https://s4sya57j5i.ufs.sh/f/1Wr3ZpR6uMW3XhcMtL2dlTYugLP9bGwRyNisZSDaOzBAQ5q1 "
                alt="PICC and Midline"
                width={1000}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="sm:text-2xl text-lg text-center pt-5 ">Overview</h2>

            <p className="my-5">
              This intensive 4-hour class focuses on the essential skills and
              knowledge required for safe and effective peripheral IV therapy.
              Participants will learn the latest techniques and best IV
              insertion, management, and troubleshooting practices.
            </p>

            <p className="my-2 font-bold">Key Learning Objectives: </p>
            <ul>
              <li>
                Understanding anatomy and physiology related to peripheral IV
                access.
              </li>
              <li>Mastering proper insertion techniques and site selection.</li>
              <li>
                Recognizing potential complications and implementing preventive
                measures.
              </li>
              <li>
                Learning best practices for IV catheter maintenance and care.
              </li>
              <li>
                Developing skills to provide patient education and support.
              </li>
            </ul>
            <h2 className="sm:text-2xl text-lg text-center pt-5 ">
              Who Should Attend:
            </h2>
            <p className="my-2">
              This class is ideal for nurses, nursing students, and other
              healthcare professionals involved in IV therapy who wish to
              enhance their competency and confidence in peripheral IV
              insertion.
            </p>
          </div>
          <div className="box-shadow p-5">
            <h2 className="sm:text-3xl text-xl text-center py-2">
              PICC/Midline Training Class
            </h2>

            <div className="w-full h-[400px] ">
              <Image
                src="https://s4sya57j5i.ufs.sh/f/1Wr3ZpR6uMW3lEH8BKhbctX6Dj7iwgFHLEh24ZzRPpJYdyKI"
                alt="periphral IV"
                width={1000}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="sm:text-2xl text-lg text-center pt-5 ">Overview</h2>

            <p className="my-5">
              Our PICC/Midline Training Class is a comprehensive program
              designed for healthcare providers who want to gain expertise in
              inserting and managing PICC and Midline catheters. This class
              combines theory with hands-on practice to ensure proficiency.
            </p>

            <p className="my-2 font-bold">Key Learning Objectives: </p>
            <ul>
              <li>
                Understanding the indications and contraindications for PICC and
                Midline use.
              </li>
              <li>
                Learning the anatomy relevant to PICC and Midline catheter
                placement.
              </li>
              <li>
                Mastering the step-by-step insertion techniques for both PICC
                and Midline catheters.
              </li>
              <li>
                Familiarization with catheter maintenance, care, and
                troubleshooting.
              </li>
              <li>
                Discussing the management of potential complications and patient
                education.
              </li>
            </ul>
            <h2 className="sm:text-2xl text-lg text-center pt-5 ">
              Who Should Attend:
            </h2>
            <p className="my-2">
              This training is suitable for registered nurses, nurse
              practitioners, and other healthcare professionals involved in
              vascular access seeking to expand their skills in PICC and Midline
              catheter procedures.
            </p>
          </div>
        </div>

        <h2 className="sm:text-4xl text-2xl text-center sm:p-5 p-2">
          Register For Our Classes
        </h2>
        <p className="mb-2">
          To register for our classes, please email us at info@safepicc.com.
          Spaces are limited, so we encourage early registration to secure your
          spot. With premium registration, you'll also gain exclusive access to
          course videos for continued learning at your convenience. For more
          details about our educational programs, reach out to us today and take
          the next step in mastering exceptional vascular access care.
        </p>
        <Button>Click here to view Courses</Button>
      </div>
    </div>
  );
};

export default education;
