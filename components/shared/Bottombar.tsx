"use client";

import { bottomBarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Bottombar() {
  const pathname = usePathname();
  return (
    <section className="bottombar">
      <div className="bottombar_container">
        {bottomBarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;
          return (
            <Link
              href={link.route}
              key={link.label}
              className={`bottombar_link ${isActive && "bg-primary-500"}`}
            >
              <p className="text-light-1">{link.label}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default Bottombar;
