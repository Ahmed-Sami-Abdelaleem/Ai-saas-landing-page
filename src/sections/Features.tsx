import slackLogo from "../assets/images/slack-logo.png";
import dockerLogo from "../assets/images/docker-logo.png";
import figmaLogo from "../assets/images/figma-logo.png";
import githubLogo from "../assets/images/github-logo.png";
import vsCodeLogo from "../assets/images/vs-code-logo.png";
import notionLogo from "../assets/images/notion-logo.png";
import jiraLogo from "../assets/images/jira-logo.png";
import gcpLogo from "../assets/images/gcp-logo.png";
import Button1 from "@/components/Button1";
import Orbit from "@/components/Orbit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import logoImage from "@/assets/images/sphereal-logo.svg?url";
import Image from "next/image";


export const features = [
  "Effortless integration",
  "Intelligent automation",
  "Robust security",
];

export const logos = [
  {
    src: slackLogo,
    alt: "slack logo",
    rotate: 0,
  },
  {
    src: dockerLogo,
    alt: "docker logo",
    rotate: 45,
  },
  {
    src: figmaLogo,
    alt: "figma logo",
    rotate: 90,
  },
  {
    src: githubLogo,
    alt: "github logo",
    rotate: 135,
  },
  {
    src: vsCodeLogo,
    alt: "vs code logo",
    rotate: 180,
  },
  {
    src: notionLogo,
    alt: "notion logo",
    rotate: 225,
  },
  {
    src: jiraLogo,
    alt: "jira logo",
    rotate: 270,
  },
  {
    src: gcpLogo,
    alt: "gcp logo",
    rotate: 315,
  },
];

export const Features = () => {
  return (
    <section >
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
        <div className="border-l border-r border-t border-[var(--color-border)] overflow-hidden py-48 px-16 ">
          <h2 className="text-3xl font-semibold text-gray-200">
            Your AI-powerd collection companion
          </h2>
          <ul className="flex flex-col gap-4 mt-8">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-4">
                <FontAwesomeIcon
                  className="size-6 text-violet-400"
                  icon={faCircleCheck}
                />
                <span className="text-xl font-medium">{feature}</span>
              </li>
            ))}
          </ul>
          <Button1 className="w-48 my-28">Try it now</Button1>
           {/* Orbit with Logos */}
           <div className="relative py-56 md:py-0 md:-inset-y-36 md:inset-x-32  md:px-12">
            <Orbit className="size-[200px] lg:size-[230px]" />
            <Orbit className="size-[300px] lg:size-[350px]" />

            {/* Center Element */}
            <div
              className="absolute-center size-20 sm:size-24 md:size-28 bg-gray-200 bg-[conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))]"
              style={{
                maskImage: `url(${logoImage.src})`,
                maskSize: "contain",
              }}
            ></div>

            {/* Logos on Outer Orbit */}
            <div className=" absolute-center size-8 lg:size-16 -translate-x-4 -translate-y-4">
              {logos.map((logo) => (
                <Image
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  className="absolute border rounded-lg p-1 bg-gray-950"
                  style={{
                    transform: `rotate(${logo.rotate}deg) translate(var(--logo-translate, 148px)) rotate(-${logo.rotate}deg)`,
                  }}
                  data-lg-translate="168px" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
