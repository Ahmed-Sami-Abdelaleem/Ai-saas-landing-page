import Image from "next/image";
import robotImage from "@/assets/images/robot.jpg";
import Loader from "@/assets/images/loader.svg";
import underLineImage from "@/assets/images/underline.svg?url";
import Orbit from "@/components/Orbit";
export const Hero = () => {
  return (
    <section>
      <div className="container">
        <div className="border-l border-r border-[var(--color-border)] overflow-hidden">
          <div className="container py-24 md:py-48 justify-center items-center flex flex-col relative isolate [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
            <div className="absolute -z-10 inset-0 bg-[radial-gradient(circle_farthest-corner,var(--color-fuchsia-900)_50%,var(--color-indigo-900)_75%,transparent)] [mask-image:radial-gradient(circle_farthest-side,black,transparent)]"></div>
            <div className="absolute -z-10 inset-0">
              <div className="absolute-center">
                <Orbit className="size-[350px]" />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[600px]" />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[850px]" />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[1100px]" />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[1350px]" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-100 text-center leading-tight">
              Unlock the Future of AI Conversations with{" "}
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
              Harness the power of AI with Sphereal. Elevate your productivity
              and streamline your workflow with our cutting-edge AI chat
              plattform.
            </p>
            <div className="h-9  w-44 text-center rounded-lg bg-white text-gray-950  mt-10 ">
              <button className="py-2 px-5 text-sm"> START CHATTING</button>
            </div>
            <div className="relative isolate max-w-5xl mx-auto">
              <div className="absolute left-1/2 top-0">
                <div className="bg-gradient-to-b from-violet-400 to-gray-950 size-8 rounded-full -translate-x-[324px] rotate-135"></div>
                <div className="bg-gradient-to-b from-violet-400 to-gray-950 size-8 rounded-full translate-x-[324px] -translate-y-[124px] -rotate-135"></div>
                <div className="bg-gradient-to-b from-fuchsia-400 to-gray-950 size-4 rounded-full -translate-x-[442px] -translate-y-[300px] rotate-135"></div>
                <div className="bg-gradient-to-b from-teal-400 to-gray-950 size-5 rounded-full translate-x-[442px] -translate-y-[239px] -rotate-135"></div>
              </div>
              <div className="absolute hidden md:block top-[40%] left-0 z-10 -translate-x-24">
                <div className="bg-gray-800/80 text-xs border border-gray-700 backdrop-blur-md p-2 rounded-xl  w-64 ">
                  <div>Can you generate an incredible Front end dev video tutorial?</div>
                  <div className="text-right text-gray-400 text-xs  font-semibold">1m ago</div>
                </div>
              </div>
              <div className="absolute hidden md:block top-[50%] left-0 z-10 translate-x-64">
                <div className="bg-gray-800/80 text-xs border border-gray-700 backdrop-blur-md p-2 rounded-xl  w-64 ">
                  <div><strong>Brainwave:</strong> I create one based on videos from Front end Tribe</div>
                  <div className="text-right text-gray-400 text-xs  font-semibold">Just now</div>
                </div>
              </div>
              <div className="mt-20  rounded-2xl overflow-hidden border-2 border-gradient relative flex">
                <Image
                  src={robotImage}
                  alt="robot image"
                  width={500}
                  height={500}
                />
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
                  <div className="bg-gray-950/80 py-2 px-4 rounded-2xl flex items-center gap-4">
                    <Loader className="text-violet-400" />
                    <div className="font-semibold text-xl text-gray-100">
                      AI is generating <span>|</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
