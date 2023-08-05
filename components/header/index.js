import Link from "next/link";
import logo from "@/components/images/logo.jpg";
import logoShopping from "@/components/images/shopping-logo.jpg";
import Image from "next/image";

const Header = () => {
  return (
    <div className="container">
      <header className="flex text-[white] gap-3 bc-nav">
        <div>
          <Image
            src={logo}
            alt="logo"
            height={50}
            width={50}
            style={{ marginRight: "20px", borderRadius: "4px", marginLeft: "20px" }}
          />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link style={{ fontSize: "20px", marginRight: "10px" }} href="/">
            Home
          </Link>
          <Link style={{ fontSize: "20px", marginRight: "10px" }} href="/about">
            About
          </Link>
          <Link
            style={{ fontSize: "20px", marginRight: "10px" }}
            href="/contact"
          >
            Contact Us
          </Link>
          <Link style={{ fontSize: "20px", marginRight: "10px" }} href="/cart">
            Cart
          </Link>
          <Image
            src={logoShopping}
            style={{ marginRight: "20px", borderRadius: "4px" }}
            alt="logo"
            height={50}
            width={50}
          />
        </div>
      </header>
    </div>
  );
};

export default Header;
