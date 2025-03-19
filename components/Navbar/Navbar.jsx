"use client";

import { UserButton, useAuth, useUser } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import Logo from "../Logo/Logo";
import MenuDrawer from "../MenuDrawer/MenuDrawer";
import { AlignRight } from "lucide-react";

const Navbar = () => {
  const { isSignedIn } = useAuth();

  const { user } = useUser();

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
        <Link href="/" className="hover:text-main-teal ">
          Home
        </Link>
        <Link href="/services" className="hover:text-main-teal">
          Services
        </Link>
        <Link href="/education" className="hover:text-main-teal">
          Education
        </Link>
        <Link href="/contact" className="hover:text-main-teal">
          Contact Us
        </Link>
        {user?.publicMetadata.isAdmin && (
          <Link href="/admin/courses" className="hover:text-main-teal">
            Admin
          </Link>
        )}
        <Link href="/courses" className="hover:text-main-teal">
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
