"use client";
import logoImage from "@/assets/images/sphereal-logo.svg?url";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

export const navItems = [
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Pricing",
    href: "#pricing",
  },
  {
    name: "Testimonials",
    href: "#testimonials",
  },
];

export const loginItems = [
  {
    buttonVariant: "tertiary",
    name: "Login",
    href: "#login",
  },
  {
    buttonVariant: "primary",
    name: "Sign Up",
    href: "#sign-up",
  },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(isMenuOpen);
  return (
    <>
      <header className="border-b border-gray-200/20 relative z-40">
        <div className="container">
          <div className="h-18 flex items-center justify-between">
            <div className="flex gap-4 items-center">
              <div
                className="size-10 bg-gray-200 bg-[conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))]"
                style={{
                  maskImage: `url(${logoImage.src})`,
                  maskSize: "contain",
                }}
              ></div>
              <div className="font-extrabold text-2xl">spheral.ai</div>
            </div>
            <div className="h-full hidden lg:block">
              <nav className="h-full">
                {navItems.map(({ name, href }) => (
                  <Link
                    className="h-full px-10 relative font-bold text-xs tracking-widest text-gray-400 uppercase inline-flex items-center 
                  before:content-[''] before:absolute before:bottom-0 before:h-2 before:w-px before:bg-gray-200/20 before:left-0 
                  last:after:content-[''] last:after:absolute last:after:bottom-0 last:after:h-2 last:after:w-px last:after:bg-gray-200/20 last:after:right-0 last:after:block"
                    href={href}
                    key={name}
                  >
                    {name}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="hidden lg:flex lg:flex-row  justify-between">
              <div className="rounded-lg bg-gray-800 relative mr-2">
                <button className="py-2 px-5 text-sm"> Login</button>
              </div>
              <div className="rounded-lg border-2 border-transparent [background:linear-gradient(var(--color-gray-950),var(--color-gray-950))_content-box,conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))_border-box] relative">
                <button className="py-2 px-5 text-sm"> Register</button>
              </div>
            </div>
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="size-10 rounded-lg border-2 border-transparent [background:linear-gradient(var(--color-gray-950),var(--color-gray-950))_content-box,conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))_border-box] relative"
              >
                <div className="absolute top-1/2 left-1/2 transition duration-300 -translate-x-1/2 -translate-y1/2">
                  <div
                    className={twMerge(
                      "w-4 h-0.5 bg-gray-100 -translate-y-1",
                      isMenuOpen && "translate-y-0 rotate-45"
                    )}
                  ></div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y1/2">
                  <div
                    className={twMerge(
                      "w-4 h-0.5 bg-gray-100 translate-y-1 transition duration-300",
                      isMenuOpen && "translate-y-0 -rotate-45"
                    )}
                  ></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>
      {isMenuOpen && (
        <div className="fixed top-18 left-0 bottom-0 right-0  bg-gray-950 z-30 lg:hidden overflow-hidden">
          <div className="container h-full">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 isolate -z-10">
              <div className="size-[200px] border border-gray-200/30 rounded-full"></div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 isolate -z-10">
              <div className="size-[350px] border border-gray-200/30 rounded-full"></div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 isolate -z-10">
              <div className="size-[500px] border border-gray-200/30 rounded-full"></div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 isolate -z-10">
              <div className="size-[6500px] border border-gray-200/30 rounded-full"></div>
            </div>

            <nav className="flex flex-col  gap-4 items-center pt-8  h-full justify-center">
              {navItems.map(({ href, name }) => (
                <Link
                  className="h-10 font-bold text-sm tracking-widest text-gray-400 uppercase"
                  href={href}
                  key={name}
                >
                  {name}
                </Link>
              ))}

              <div className="w-full rounded-lg bg-gray-800 relative mr-2">
                <button className="w-full py-2 px-5 text-sm font-bold  tracking-widest text-gray-400 uppercase">
                  Login
                </button>
              </div>
              <div className="w-full rounded-lg border-2 border-transparent [background:linear-gradient(var(--color-gray-950),var(--color-gray-950))_content-box,conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))_border-box] relative">
                <button className="w-full py-2 px-5 text-sm font-bold  tracking-widest text-gray-400 uppercase">
                  Register
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
