import Link from "next/link";

export function Navbar() {
  return (
    <div className="flex max-w-full items-center justify-items-stretch rounded-2xl bg-[#1D232A] px-6 py-2 shadow-nav">
      <div className="flex grow items-center justify-center">
        <Link href="/">
          {/* <Image src="/logo.svg" alt="Logo" width={24} height={24} /> */}
        </Link>
      </div>
      <Link href="/checkout" className="min-h-6 min-w-6 grow-0 items-center">
        {/* <Image src="/cart.svg" alt="Cart" width={24} height={24} /> */}
      </Link>
    </div>
  );
}
