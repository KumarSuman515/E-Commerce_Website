"use client";

import { ShoppingCart, UserIcon, Menu as MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import { ModeToggle } from "./modeToggle";
import Menu from "../menu/menu";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-colors">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo + App Name */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.svg"
            alt={APP_NAME}
            width={40}
            height={40}
            priority
            className="rounded"
          />
          <span className="hidden sm:inline font-bold text-lg text-gray-800 dark:text-gray-200">
            {APP_NAME}
          </span>
        </Link>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <ModeToggle />

          <Link href="/cart">
            <ShoppingCart className="w-6 h-6 text-gray-700 dark:text-gray-300 hover:text-green-500 transition" />
          </Link>

          <Link href="/account">
            <UserIcon className="w-6 h-6 text-gray-700 dark:text-gray-300 hover:text-green-500 transition" />
          </Link>

          <Button variant="outline">Login</Button>

          <Menu />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <MenuIcon className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-4 py-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <Link href="/cart" className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            Cart
          </Link>

          <Link href="/account" className="flex items-center gap-2">
            <UserIcon className="w-5 h-5" />
            Account
          </Link>

          <Button variant="outline" className="w-full">
            Login
          </Button>

          <ModeToggle />

          <Menu />
        </div>
      )}
    </header>
  );
};

export default Header;
