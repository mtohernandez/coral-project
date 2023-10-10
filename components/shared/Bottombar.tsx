"use client";

import { bottomBarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "../ui/button";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";

function Bottombar() {
  const { user } = useUser();
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
              href={
                link.route === "/profile" ? `/profile/${user?.id}` : link.route
              }
              key={link.label}
              className={`bottombar_link ${isActive && "bg-neutral-200"}`}
            >
              <Image
                src={link.imgURL}
                width={24}
                height={24}
                alt={link.label}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default Bottombar;
