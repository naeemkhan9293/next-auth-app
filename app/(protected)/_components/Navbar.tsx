"use client";

import { UserButton } from "@/components/auth/user-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = ["/settings", "/server", "/client", "/admin"];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="bg-secondary flex justify-between items-center p-4 rounded-xl w-[600px] shadow-md">
      <div className="flex gap-x-2">
        {navLinks.map((item, index) => (
          <Button
            key={index}
            asChild
            variant={pathname === item ? "default" : "outline"}
          >
            <Link href={item}>
              {item.charAt(1).toUpperCase() + item.slice(2, item.length)}
            </Link>
          </Button>
        ))}
      </div>
      <UserButton />
    </nav>
  );
}
