"use client";

import { UserButton, useAuth } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import Logo from "../Logo/Logo";
import MenuDrawer from "../MenuDrawer/MenuDrawer";
import { AlignRight } from "lucide-react";

const Navbar = () => {
  const { isSignedIn } = useAuth();
  return (
    <div
      className="bg-black text-white
     flex justify-around items-center py-2 "
    >
      <div className="md:hidden">
        <MenuDrawer />
      </div>
      <Logo />

      <div className="md:flex justify-between gap-10 hidden ">
        <Link href="/" className="hover:text-main-teal/80 ">
          Home
        </Link>
        <Link href="/services" className="hover:text-main-teal/80">
          Services
        </Link>
        <Link href="/education" className="hover:text-main-teal/80">
          Education
        </Link>
        <Link href="/contact" className="hover:text-main-teal/80">
          Contact Us
        </Link>
        <Link href="/admin/courses" className="hover:text-main-teal/80">
          Admin
        </Link>
        <Link href="/courses" className="hover:text-main-teal/80">
          Courses
        </Link>
      </div>
      <div className="md:flex hidden">
        {isSignedIn ? (
          <UserButton />
        ) : (
          <Link href="/sign-in">
            <Button>Sign in</Button>
          </Link>
        )}
      </div>
      <div className=" ">
        <AlignRight className="text-black" />
      </div>
    </div>
  );
};

export default Navbar;
