"use client";

import { UserButton, useAuth } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Navbar = () => {
  const { isSignedIn } = useAuth();
  return (
    <div className="bg-main-teal flex justify-around items-center h-20">
      <div>SAFE PICC</div>

      <div className="flex justify-between gap-10">
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/education">Education</Link>
        <Link href="/">Contact Us</Link>
        <Link href="/admin/courses">Courses</Link>
      </div>
      <div>
        {isSignedIn ? (
          <UserButton />
        ) : (
          <Link href="/sign-in">
            <Button>Sign in</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
