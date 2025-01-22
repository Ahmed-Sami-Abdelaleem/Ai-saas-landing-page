"use client";

import AcmeCorpLogo from "../assets/images/acme-corp-logo.svg";
import EchoValleyLogo from "../assets/images/echo-valley-logo.svg";
import QuantumLogo from "../assets/images/quantum-logo.svg";
import PulseLogo from "../assets/images/pulse-logo.svg";
import OutsideLogo from "../assets/images/outside-logo.svg";
import CelestialLogo from "../assets/images/celestial-logo.svg";
import { motion } from "framer-motion";

export const companies = [
  {
    name: "Acme Corp",
    logo: AcmeCorpLogo,
  },
  {
    name: "Echo Valley",
    logo: EchoValleyLogo,
  },
  {
    name: "Quantum",
    logo: QuantumLogo,
  },
  {
    name: "Pulse",
    logo: PulseLogo,
  },
  {
    name: "Outside",
    logo: OutsideLogo,
  },
  {
    name: "Celestial",
    logo: CelestialLogo,
  },
];

export const Companies = () => {
  return (
    <section className=" overflow-hidden">
      <div className="container">
        <div className="border-l border-r border-[var(--color-border)] overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-5 px-12 py-10">
          <div className="flex-1 md:flex-none text-center ">
            <h2>Empowering Creatators at landing companies</h2>
          </div>
          <div className="flex-1 [mask-image:linear-gradient(to_right,transparent,black_60%,transparent)]">
            <motion.div
              initial={{
                translateX: "-50%",
              }}
              animate={{
                translateX: "0",
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex flex-none gap-14 items-center"
            >
              {companies.map((company) => {
                const LogoComponent = company.logo;
                return (
                  <LogoComponent
                    key={company.name}
                    alt={`${company.name} logo`}
                    className="h-6 w-auto"
                  />
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Companies;