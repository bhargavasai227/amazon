import Link from "next/link";

export default function Navbar(){
    return (
      <nav className=" p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/">
            Your Logo
          </Link>

          <div className="hidden md:flex space-x-4">
            <Link href="/">
              Home
            </Link>
            <Link href="/cart">
          Cart
            </Link>
          </div>
        </div>
      </div>
    </nav>
      );
}