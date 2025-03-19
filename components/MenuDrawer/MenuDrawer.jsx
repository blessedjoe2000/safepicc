"use client";

import { Button } from "@/components/ui/button";
import { UserButton, useAuth, useUser } from "@clerk/nextjs";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import Link from "next/link";
import { AlignLeft } from "lucide-react";

const MenuDrawer = () => {
  const { isSignedIn } = useAuth();
  const { user } = useUser();

  return (
    <div className="">
      <Sheet>
        <SheetTrigger asChild>
          <AlignLeft className="text-main-teal/80" />
        </SheetTrigger>
        <SheetContent side="left">
          <div
            className="
     flex flex-col gap-5 justify-around items-center py-2 mt-5 border-t-2 border-black"
          >
            <div className="flex flex-col justify-center items-center gap-5 my-5">
              <Link href="/" className="hover:text-main-red ">
                <SheetClose>Home</SheetClose>
              </Link>
              <Link href="/services" className="hover:text-main-red">
                <SheetClose>Services</SheetClose>
              </Link>
              <Link href="/education" className="hover:text-main-red">
                <SheetClose>Education</SheetClose>
              </Link>
              <Link href="/contact" className="hover:text-main-red">
                <SheetClose>Contact Us</SheetClose>
              </Link>
              {user?.publicMetadata.isAdmin && (
                <Link href="/admin/courses" className="hover:text-main-red">
                  <SheetClose>Admin</SheetClose>
                </Link>
              )}
              <Link href="/courses" className="hover:text-main-red">
                <SheetClose>Courses</SheetClose>
              </Link>
            </div>
            <div>
              {isSignedIn ? (
                <UserButton />
              ) : (
                <Link href="/sign-in">
                  <Button>
                    <SheetClose>Sign in</SheetClose>
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MenuDrawer;
