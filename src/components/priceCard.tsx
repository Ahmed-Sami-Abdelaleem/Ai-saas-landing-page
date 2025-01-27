import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export interface Tier {
    title: string;
    description: string;
    price: number | string | null; // Allow null for price
    duration?: string;
    features: string[];
    className?: string;
    buttonText: string;
    buttonColor: boolean;
    color: "amber"| "violet" | "teal";
  }
 
  
  function PriceCard(props: Tier) {
    const {
      title,
      price,
      duration = "month",
      features,
      className = "",
      buttonText,
      buttonColor,
      color,
    } = props;
    const colorClasses = {
      amber: "text-amber-400",
      violet: "text-violet-400",
      teal: "text-teal-400",
    };
    return (
      <div className={` rounded-2xl  border shadow-sm ring-1 p-6 sm:order-last ${className}`}>
        <div className="text-center">
        <h2 className={`text-4xl font-semibold md:text-xl lg:text-4xl ${colorClasses[color] || "text-gray-400"}`}>
            {title}
            <span className="sr-only">Plan</span>
          </h2>
  
          <p className="mt-2 sm:mt-4">
            <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
              {price === null ? "Free" : `$${price}`}
            </strong>
            <span className="text-sm font-medium text-gray-700">/{duration}</span>
          </p>
        </div>
  
        <ul className="flex flex-col gap-2 mt-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCircleCheck} className={`text-${color}-400 size-6` } />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
  
        <a
          href="#"
          className={`mt-8 block rounded-full border   px-12 py-3 text-center text-sm font-medium text-white hover:bg-indigo-700 hover:ring-1 hover:ring-indigo-700 focus:outline-none focus:ring active:text-indigo-500 ${
            buttonColor ? "border-indigo-600 bg-indigo-600" : "bg-gray-900"
          }`}
        >
          {buttonText}
        </a>
      </div>
    );
  }
  
  export default PriceCard;
  