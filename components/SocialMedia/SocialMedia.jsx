import { SocialIcon } from "react-social-icons";

const SocialMedia = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <h2 className="sm:text-2xl text-lg pt-5 ">Visit Our Social Media</h2>
      <div className="my-2 flex gap-2">
        <SocialIcon network="youtube" url="/" />
        <SocialIcon network="facebook" url="/" />
        <SocialIcon network="instagram" url="/" />
        <SocialIcon network="x" url="/" />
      </div>
    </div>
  );
};

export default SocialMedia;
