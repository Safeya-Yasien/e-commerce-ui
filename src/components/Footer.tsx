import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-8 flex flex-col md:flex-row items-center justify-between gap-8 mt-auto">
      {/* first column */}
      <div className="flex flex-col items-center md:items-start  gap-4 ">
        <Link href={"/"} className="flex items-center space-x-2">
          <Image
            src={"/logo.png"}
            alt="TrendLama"
            width={36}
            height={36}
            className=""
          />
          <p className="text-white uppercase font-medium text text-base tracking-wider hidden md:block">
            trendlama.
          </p>
        </Link>

        <p className="text-gray-400 text-sm">© 2023 TrendLama.</p>
        <p className="text-gray-400 text-sm">All rights reserved.</p>
      </div>

      {/* second column */}
      <div className="flex flex-col items-center md:items-start gap-4 text-sm">
        <p className="text-amber-50 font-medium">Links</p>
        <ul className="flex flex-col items-center md:items-start text-gray-400 gap-4 ">
          <li>
            <Link href={"/"} className="hover:text-white ">
              Homepage
            </Link>
          </li>
          <li>
            <Link href={"/"} className="hover:text-white ">
              Contact
            </Link>
          </li>
          <li>
            <Link href={"/"} className="hover:text-white ">
              Terms of Service
            </Link>
          </li>
          <li>
            <Link href={"/"} className="hover:text-white ">
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>

      {/* third column */}
      <div className="flex flex-col items-center md:items-start gap-4 text-sm">
        <p className="text-amber-50 font-medium">Products</p>
        <ul className="flex flex-col items-center md:items-start text-gray-400 gap-4 ">
          <li>
            <Link href={"/"} className="hover:text-white ">
              All Products
            </Link>
          </li>
          <li>
            <Link href={"/"} className="hover:text-white ">
              New Arrival
            </Link>
          </li>
          <li>
            <Link href={"/"} className="hover:text-white ">
              Best Sellers
            </Link>
          </li>
          <li>
            <Link href={"/"} className="hover:text-white ">
              Sale
            </Link>
          </li>
        </ul>
      </div>

      {/* fourth column */}
      <div className="flex flex-col items-center md:items-start gap-4 text-sm">
        <p className="text-amber-50 font-medium">Company</p>
        <ul className="flex flex-col items-center md:items-start text-gray-400 gap-4 ">
          <li>
            <Link href={"/"} className="hover:text-white ">
              About
            </Link>
          </li>
          <li>
            <Link href={"/"} className="hover:text-white ">
              Contact
            </Link>
          </li>
          <li>
            <Link href={"/"} className="hover:text-white ">
              Blog
            </Link>
          </li>
          <li>
            <Link href={"/"} className="hover:text-white ">
              Affiliate Program
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
