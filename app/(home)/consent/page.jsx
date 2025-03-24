import ConsentHeader from "@/components/ImageHeader/ConsentHeader";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Consent = () => {
  return (
    <div>
      <ConsentHeader />
      <div className="lg:mx-20 md:mx-10 mx-5 sm:my-10 my-5">
        <h2 className="sm:text-5xl text-3xl text-center sm:p-5 p-2">
          We Require Your Consent
        </h2>
        <div>
          <p className="sm:my-5 mb-2">
            We are committed to ensuring that all patients are well-informed and
            comfortable before undergoing any procedures. Before obtaining a
            PICC or Midline catheter, securing consent from the patient or their
            responsible party is essential. This process helps ensure that
            everyone understands the procedure and its implications. Once
            consent is obtained, please schedule the placement with us.
          </p>
          <Button>
            <Link
              href="https://s4sya57j5i.ufs.sh/f/1Wr3ZpR6uMW3OjyJ9SG1p9biyHf3LaClxZ5mkUA4RFQcd8tW"
              target="_blank"
            >
              Click here to Download the Consent Form
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Consent;
