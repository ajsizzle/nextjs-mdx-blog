import Link from "next/link";

const Nav = () => {
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/" passHref>
            <h2 className="rounded-full font-semibold text-2xl text-slate-900 cursor-pointer">
              Alex Johnson
            </h2>
          </Link>
        </div>
        <div className="hidden md:flex space-x-10">
          <Link href="/about" passHref>
            <p className="hover:text-navy cursor-pointer">about</p>
          </Link>
          <Link href="/web3" passHref>
            <p className="hover:text-navy cursor-pointer">web 3.0</p>
          </Link>
          <Link href="/dad_life" passHref>
            <p className="hover:text-navy cursor-pointer">dad_life</p>
          </Link>
          <Link href="/herbaculture" passHref>
            <p className="hover:text-navy cursor-pointer">herbaculture</p>
          </Link>
        </div>
        <div className="hidden md:block space-x-4">
          <a
            href="https://github.com/ajsizzle"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/alexanderedwardjohnson/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/aj_sizzle"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
