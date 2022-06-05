import Link from "next/link";

const Nav = () => {
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <Link href="/" passHref>
          <h2 className="rounded-full font-semibold text-slate-900 cursor-pointer">
            Alex Johnson
          </h2>
        </Link>
        <div className="hidden md:flex space-x-10">
          <Link href="/about" passHref>
            <p className="hover:text-navy cursor-pointer">about</p>
          </Link>
          <Link href="/web-3" passHref>
            <p className="hover:text-navy cursor-pointer">web 3.0</p>
          </Link>
          <Link href="/dad-dev" passHref>
            <p className="hover:text-navy cursor-pointer">dad_dev</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
