import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="https://s4sya57j5i.ufs.sh/f/1Wr3ZpR6uMW3HxvIjcbqjPmTLl4WEH2Qo6iaCeJsdzYxbuk0"
        alt="safe picc logo"
        width={300}
        height={150}
      />
    </Link>
  );
};

export default Logo;
