"use client";

import { EllipsisVertical, ShoppingCart, UserIcon } from "lucide-react";
import { ModeToggle } from "../header/modeToggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Menu() {
  return (
    <div className="flex justify-end gap-3">
      {/* Desktop Menu */}
      <nav className="hidden md:flex w-full max-w-xs gap-2 items-center">
        <ModeToggle />

        <Button asChild variant="outline" className="flex items-center gap-2">
          <Link href="/cart">
            <ShoppingCart className="w-5 h-5" />
            <span className="hidden sm:inline">Cart</span>
          </Link>
        </Button>

        <Button asChild className="flex items-center gap-2">
          <Link href="/sign-in">
            <UserIcon className="w-5 h-5" />
            <span className="hidden sm:inline">Sign In</span>
          </Link>
        </Button>
      </nav>

      {/* Mobile Menu */}
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <EllipsisVertical className="h-5 w-5" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="flex flex-col items-start gap-4">
            <SheetTitle className="text-lg font-semibold">Menu</SheetTitle>
            <SheetDescription>Quick access to your account</SheetDescription>

            <ModeToggle />

            <Button
              asChild
              variant="outline"
              className="flex items-center gap-2 w-full"
            >
              <Link href="/cart">
                <ShoppingCart className="w-5 h-5" />
                Cart
              </Link>
            </Button>

            <Button asChild className="flex items-center gap-2 w-full">
              <Link href="/sign-in">
                <UserIcon className="w-5 h-5" />
                Sign In
              </Link>
            </Button>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
}
