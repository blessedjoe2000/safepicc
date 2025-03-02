import VolunteeringHeader from "@/components/ImageHeader/VolunteeringHeader";

const Volunteering = () => {
  return (
    <div>
      <VolunteeringHeader />
      <div className="lg:mx-20 md:mx-10 mx-5 sm:my-10 my-5">
        <h2 className="sm:text-5xl text-3xl text-center sm:p-5 p-2">
          Giving Back is Our Priority
        </h2>
        <p className="">
          We are committed to giving back to the community by promoting health
          education and awareness. Active community engagement is essential to
          fostering a healthier and more informed society. Through various
          service initiatives and volunteering opportunities, we aim to make a
          meaningful impact. We invite you to join us in these efforts and work
          together to create a healthier future for all.
        </p>
        <h2 className="sm:text-4xl text-2xl text-center sm:p-5 p-2">
          Community Services
        </h2>

        <p className="sm:mb-4 mb-2">
          Our team is committed to providing support and resources to local
          communities. We offer a range of services, including:
        </p>
        <ul>
          <li>
            <span>Health Workshops: </span>
            We conduct informative sessions on vascular access, catheter care,
            and patient safety. These workshops educate patients, caregivers,
            and healthcare professionals about best practices.
          </li>
          <li>
            <span>Screening Events: </span>
            Safe PICC Plus Inc can participate in community health fairs and
            screening events to offer free consultations and assessments related
            to vascular access.
          </li>
          <li>
            <span>Educational Programs: </span>
            We provide resources and training for healthcare workers and
            students to ensure they are well-equipped with the knowledge
            necessary to provide quality care.
          </li>
        </ul>
        <h2 className="sm:text-4xl text-2xl text-center sm:p-5 p-2">
          Volunteering Opportunities
        </h2>

        <p className="sm:mb-4 mb-2">
          We encourage individuals and organizations to collaborate with us in
          various volunteering efforts:
        </p>
        <ul>
          <li>
            <span>Health Outreach: </span>
            Join our team in organizing and participating in outreach programs
            that aim to educate underserved communities about vascular access
            and general health.
          </li>
          <li>
            <span>Event Coordination: </span>
            Help us plan and execute community events, such as health fairs,
            workshops, and educational seminars.
          </li>
          <li>
            <span>Advocacy: </span>
            Partner with us to advocate for better vascular access practices and
            policies in healthcare settings.
          </li>
        </ul>
        <h2 className="sm:text-4xl text-2xl text-center sm:p-5 p-2">
          Invite Safe PICC Plus Inc.
        </h2>
        <p className="">
          If you would like us to participate in community service activities or
          volunteer opportunities, please reach out. We are eager to collaborate
          and make a positive impact together. Thank you for considering us as a
          partner in your community initiatives—let's work together to promote
          better health and well-being for all!
        </p>
      </div>
    </div>
  );
};

export default Volunteering;
