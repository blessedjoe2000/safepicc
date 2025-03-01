import ServicesVideo from "@/components/Videos/ServicesVideo";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div>
      <ServicesVideo />
      <div className="lg:mx-20 md:mx-10 mx-5 sm:my-10 my-5">
        <h2 className="sm:text-4xl text-2xl text-center p-2">
          Learn About PICC and Midline Catheters
        </h2>
        <div className="flex items-center justify-center">
          <Image
            src="https://s4sya57j5i.ufs.sh/f/1Wr3ZpR6uMW3mTH4NEv67zI0h3PHmg2MA65pliVjkxELYar1"
            alt="picc vs midline"
            width={800}
            height={400}
            className=""
          />
        </div>
        <div className="flex sm:flex-row flex-col sm:gap-5 gap-2 justify-center items-stretch w-full mt-2">
          <div className="box-shadow p-5">
            <h2 className="sm:text-3xl text-xl text-center py-2">PICC Line</h2>
            <p>
              A peripherally inserted central catheter (PICC) is a long, thin
              tube inserted into a peripheral vein, usually in the arm, and
              threaded into a more prominent vein near the heart. This catheter
              is designed for long-term intravenous (IV) access, making it
              suitable for patients requiring extended therapy.
            </p>
            <h2 className="sm:text-2xl text-lg text-center pt-5 ">
              Why Use a PICC Line?
            </h2>
            <p className="my-2">
              <span>Extended Treatment Duration: </span>
              PICC lines are ideal for patients who need long-term IV therapy
              (weeks to months), such as chemotherapy, antibiotics, or total
              parenteral nutrition.
            </p>
            <ul>
              <li>
                <span>Minimized Discomfort: </span>
                They provide a more comfortable experience, as they are less
                likely to irritate veins and avoid the discomfort associated
                with frequent needle sticks.
              </li>
              <li>
                <span>Reduced Risk of Complications: </span>
                Inserted under sterile conditions by trained professionals, PICC
                lines minimize the risk of infections and complications related
                to repeated peripheral access.
              </li>
              <li>
                <span>Versatile Use: </span>
                Suitable for various treatments, including medication
                administration, blood draws, and nutrition delivery.
              </li>
              <li>
                <span>Improved Quality of Life: </span>
                PICC lines enhance patient quality of life by providing reliable
                access to the bloodstream for complex treatment regimens.
              </li>
            </ul>
          </div>
          <div className="box-shadow p-5">
            <h2 className="sm:text-3xl text-xl text-center py-2">
              Midline Catheter
            </h2>
            <p>
              A Midline catheter is an IV catheter inserted into a peripheral
              vein, but it is positioned slightly further than a traditional
              peripheral IV, usually terminating in the upper arm. Midlines are
              typically used for shorter-term therapies compared to PICC lines.
            </p>
            <h2 className="sm:text-2xl text-lg text-center pt-5 ">
              Why Use a Midline Catheter?
            </h2>
            <p className="my-2">
              <span>Short—to Medium-Term IV Access: </span>
              Midline catheters are excellent for patients requiring IV therapy
              lasting from a few days to several weeks. They are suitable for
              treatments such as hydration, antibiotic therapy, or medication
              administration.
            </p>
            <ul>
              <li>
                <span>Less Invasive than PICC Lines: </span>
                Midlines offer a less invasive option for patients who do not
                require the longer-term access provided by PICC lines, reducing
                the likelihood of complications.
              </li>
              <li>
                <span>Improved Patient Comfort: </span>
                Like PICC lines, Midlines provide a comfortable insertion site,
                minimizing irritation and discomfort from frequent venous
                access.
              </li>
              <li>
                <span>Easier Maintenance: </span>
                Midline catheters can often be managed with fewer restrictions
                than central lines, allowing for a more flexible treatment
                approach.
              </li>
            </ul>
          </div>
        </div>
        <p className="py-5">
          Our certified professionals ensure that PICC and Midline catheter
          insertions are performed with expertise and care, prioritizing patient
          safety and comfort.
        </p>
      </div>
    </div>
  );
};

export default Services;
