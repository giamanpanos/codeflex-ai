"use client";

import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { DumbbellIcon, HomeIcon, Menu, UserIcon, ZapIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const Navbar = () => {
  const { isSignedIn } = useUser();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-md border-b border-border py-3">
      <div className="container mx-auto flex items-center justify-between max-w-[96%]">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <div className="p-1 bg-primary/10 rounded">
            <ZapIcon className="w-4 h-4 text-primary" />
          </div>
          <span className="text-xl font-bold font-mono">
            code<span className="text-primary">flex</span>.ai
          </span>
        </Link>

        {/* NAVIGATION DESKTOP */}
        <nav className="hidden sm:flex items-center gap-5">
          {isSignedIn ? (
            <>
              <Link
                href="/"
                className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
              >
                <HomeIcon size={16} />
                <span>Home</span>
              </Link>

              <Link
                href="/generate-program"
                className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
              >
                <DumbbellIcon size={16} />
                <span>Generate</span>
              </Link>

              <Link
                href="/profile"
                className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
              >
                <UserIcon size={16} />
                <span>Profile</span>
              </Link>
              <Button
                asChild
                variant="outline"
                className="ml-2 border-primary/50 text-primary hover:text-white hover:bg-primary/10"
              >
                <Link href="/generate-program">Get Started</Link>
              </Button>
              <UserButton />
            </>
          ) : (
            <>
              <SignInButton>
                <Button
                  variant={"outline"}
                  className="border-primary/50 text-primary hover:text-white hover:bg-primary/10"
                >
                  Sign In
                </Button>
              </SignInButton>

              <SignUpButton>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Sign Up
                </Button>
              </SignUpButton>
            </>
          )}
        </nav>

        {/* NAVIGATION MOBILE */}
        <div className="sm:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Menu />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {isSignedIn ? (
                <>
                  <DropdownMenuItem>
                    <Link
                      href="/"
                      className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
                    >
                      <HomeIcon size={16} />
                      <span>Home</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      href="/generate-program"
                      className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
                    >
                      <DumbbellIcon size={16} />
                      <span>Generate</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      href="/profile"
                      className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
                    >
                      <UserIcon size={16} />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Button
                      asChild
                      variant="outline"
                      className="border-primary/50 text-primary hover:text-white hover:bg-primary/10"
                    >
                      <Link href="/generate-program">Get Started</Link>
                    </Button>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <UserButton />
                  </DropdownMenuItem>
                </>
              ) : (
                <>
                  <DropdownMenuItem>
                    <SignInButton>
                      <Button
                        variant={"outline"}
                        className="border-primary/50 text-primary hover:text-white hover:bg-primary/10"
                      >
                        Sign In
                      </Button>
                    </SignInButton>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <SignUpButton>
                      <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                        Sign Up
                      </Button>
                    </SignUpButton>
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
