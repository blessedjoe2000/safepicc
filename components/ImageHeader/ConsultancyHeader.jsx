import Image from "next/image";

const ConsultancyHeader = () => {
  return (
    <div className="homevideo">
      <div className="welcome-overlay"></div>
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        <Image
          src="https://s4sya57j5i.ufs.sh/f/1Wr3ZpR6uMW3u1gg0vEELgO6kdNYMZ0sKuzV3BRATmf7HGxF"
          alt="consultancy"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="video-content">
        <div className="bg-black/20 sm:p-5 p-2 sm:mt-5 mt-2 ">
          <h1 className=" welcome-heading font-robotoSlab ">Consultancy</h1>
        </div>
      </div>
    </div>
  );
};

export default ConsultancyHeader;
