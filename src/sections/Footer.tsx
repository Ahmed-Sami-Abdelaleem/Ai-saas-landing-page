import React from "react";
import {
  faYoutube,
  faXTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import logoImage from "@/assets/images/sphereal-logo.svg?url";

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
  {
    name: "Login",
    href: "#login",
  },
];

export const socialLinks = [
  {
    name: "Youtube",
    icon: faYoutube,
    href: "#youtube",
  },
  {
    name: "X",
    icon: faXTwitter,
    href: "#x",
  },
  {
    name: "Discord",
    icon: faDiscord,
    href: "#discord",
  },
];

export const Footer = () => {
  return (
    <footer>
      <div className="container relative">
        <FontAwesomeIcon
          className="absolute -top-2 left-2  lg:left-6  size-4"
          icon={faPlus}
        />

        {/* Top Right Plus Icon */}
        <FontAwesomeIcon
          className="absolute -top-2 right-2 lg:right-6  size-4"
          icon={faPlus}
        />
        <div className=" border-t border-[var(--color-border)] overflow-hidden py-12"></div>
        <div className="container mx-auto px-6">
          {/* Navigation Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media Links */}
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex justify-center space-x-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <FontAwesomeIcon icon={link.icon} size="2x" />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Image */}
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
          </div>

          {/* Footer Divider */}
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
            &copy; {new Date().getFullYear()} Ahmed Sami. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
