"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { galerieLinks } from "@/lib/consts";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function GalerieMenu() {
  const currentPath = usePathname();
  return (
    <div className="mb-10 block px-4 text-center">
      {galerieLinks.map((item) => (
        <Link key={item.label} href={item.path}>
          <Button
            variant={"transparent"}
            className={cn(
              "text-xl hover:bg-primary",
              currentPath === item.path ? "bg-ring" : ""
            )}
          >
            {item.label}
          </Button>
        </Link>
      ))}
    </div>
  );
}
