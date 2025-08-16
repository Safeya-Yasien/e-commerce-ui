import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { Bell, Home } from "lucide-react";
import ShoppingCartIcon from "./ShoppingCartIcon";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between pb-4 border-b border-gray-200">
      {/* left */}
      <Link href={"/"} className="flex items-center space-x-2">
        <Image src={"/logo.png"} alt="TrendLama" width={36} height={36} />
        <p className="uppercase font-medium text text-base tracking-wider">
          trendlama.
        </p>
      </Link>

      {/* right */}
      <div className="flex items-center space-x-4">
        <SearchBar />
        <Link href={"/"}>
          <Home className="w-4 h-4 text-gray-600" />
        </Link>
        <Bell className="w-4 h-4 text-gray-600" />
        <ShoppingCartIcon />
        <Link href={"/login"}>Sign in</Link>
      </div>
    </nav>
  );
};
export default Navbar;
