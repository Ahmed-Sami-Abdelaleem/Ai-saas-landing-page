import Orbit from "@/components/Orbit";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import underLineImage from "@/assets/images/underline.svg?url";

export const CallToAction = () => {
  return (
    <section>
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
        <div className="border-l border-r border-t border-[var(--color-border)] overflow-hidden py-12">
          <div className="container py-24 md:py-96 justify-center items-center flex flex-col relative isolate [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
            <div className="absolute -z-10 inset-0 bg-[radial-gradient(circle_farthest-corner,var(--color-fuchsia-900)_50%,var(--color-indigo-900)_75%,transparent)] [mask-image:radial-gradient(circle_farthest-side,black,transparent)]"></div>
            <div className="absolute -z-10 inset-0 ">
              <div className="absolute-center">
                <Orbit className="size-[200px]" />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[350px]" />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[550px]" />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[750px]" />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[950px]" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-100 text-center leading-tight">
              Join the AI Revolution with{" "}
              <span className="relative">
                <span>Spereal</span>
                <span
                  className="absolute w-full left-0 h-4 top-full -translate-y-1/2 bg-[linear-gradient(to_right,var(--color-amber-300),var(--color-violet-400),var(--color-fuchsia-400))]"
                  style={{
                    maskImage: `url(${underLineImage.src})`,
                    maskSize: "contain",
                    maskPosition: "center",
                    maskRepeat: "no-repeat",
                  }}
                ></span>
              </span>
            </h1>
            <p className="mt-8 text-lg text-center ">
              Experince the transformative power of AI with Sphereal. Elevate
              your productivity and streamline your workflow with our
              cutting-edge AI chat plattform. Boost your Productivity and streamline your workflow with our cutting-edge AI chat platform.
            </p>
            <div className="h-9  w-44 text-center rounded-lg bg-white text-gray-950  mt-10 ">
              <button className="py-2 px-5 text-sm"> Get Started</button>
            </div>
            <div className="relative isolate max-w-5xl mx-auto">
              <div className="absolute left-1/2 top-0">
                <div className="bg-gradient-to-b from-violet-400 to-gray-950 size-8 rounded-full translate-y-[124px] -translate-x-[344px] rotate-135"></div>
                <div className="bg-gradient-to-b from-violet-400 to-gray-950 size-9 rounded-full translate-x-[124px] -translate-y-[24px] -rotate-135"></div>
                <div className="bg-gradient-to-b from-fuchsia-400 to-gray-950 size-5 rounded-full -translate-x-[142px] -translate-y-[100px] rotate-135"></div>
                <div className="bg-gradient-to-b from-teal-400 to-gray-950 size-6 rounded-full -translate-x-[250px] -translate-y-[449px] -rotate-135"></div>
                <div className="bg-gradient-to-b from-violet-400 to-gray-950 size-11 rounded-full translate-x-[20px] translate-y-[150px] -rotate-135"></div>
                <div className="bg-gradient-to-b from-fuchsia-400 to-gray-950 size-5 rounded-full translate-x-[120px] -translate-y-[215px] rotate-135"></div>
                <div className="bg-gradient-to-b from-teal-400 to-gray-950 size-6 rounded-full translate-x-[200px] -translate-y-[470px] -rotate-135"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
