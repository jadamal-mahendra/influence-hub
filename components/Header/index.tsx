import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02">
      <h1 className="flex items-center space-x-2 w-3/12">
        <Link href="/">
          <Image
            src={"/assets/logo.png"}
            alt="Influence hub"
            width={"30"}
            height={"30"}
          />
        </Link>
        <Link href="/" className="font-semibold">
          Influence Hub
        </Link>
      </h1>

      <nav className="nav font-semibold text-lg">
        <ul className="flex items-center">
          <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
            <a href="">Dashboard</a>
          </li>
        </ul>
      </nav>

      <div className="w-3/12 flex justify-end">
        <a href=""></a>
        <a href=""></a>
      </div>
    </header>
  );
};

export default Header;
