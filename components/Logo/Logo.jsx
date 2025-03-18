import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="https://s4sya57j5i.ufs.sh/f/1Wr3ZpR6uMW3YBOkZLfsSMvDTqC7bN4WxwhVO3R5k1GgHa2z"
        alt="safe picc logo"
        width={250}
        height={150}
      />
    </Link>
  );
};

export default Logo;
