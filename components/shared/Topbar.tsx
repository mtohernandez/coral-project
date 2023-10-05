"use client";

import { SignedIn, UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Link from "next/link";

function Topbar() {
  return (
    <nav className="topbar">
      <div className="flex items-center justify-between w-full max-w-4xl ml-auto mr-auto">
        <Link href="/" className="flex">
          <p className="text-heading3-bold text-light-1 max-xs:hidden">Coral</p>
        </Link>
        <div className="flex items-center gap-1">
          <div className="block">
            <SignedIn>
              <UserButton appearance={{ baseTheme: dark }} />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Topbar;
