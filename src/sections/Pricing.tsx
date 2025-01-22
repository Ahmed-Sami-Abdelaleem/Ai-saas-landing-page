import PriceCard, { Tier } from "@/components/priceCard";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const pricingTiers: Tier[] = [
  {
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "Free",
    buttonText: "Get Started",
    buttonColor: false,
    features: [
      "Access to AI chatbot for natural language conversations",
      "Basic task automation for simple workflows",
      "Limited message history storage",
    ],
    color: "amber",
    className: "lg:py-12 lg:my-6",
  },
  {
    title: "Premium",
    description: "Advanced AI capabilities for enhanced productivity",
    price: 99,
    buttonText: "Upgrade to Premium",
    buttonColor: false,
    features: [
      "All Basic features included",
      "Priority access to new AI features and updates",
      "Advanced automation tools for seamless task management",
      "Customizable chat templates for your specific workflows",
    ],
    color: "violet",
    className: "lg:py-18 lg:my-0",
  },
  {
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: 350,
    buttonText: "Contact Us",
    buttonColor: true,
    features: [
      "All Premium features included",
      "Dedicated account manager and priority customer support",
      "Enhanced security and compliance features for large teams",
      "Custom AI models tailored to your organization's needs",
      "API access for seamless integration with enterprise systems",
    ],
    color: "teal",
    className: "lg:py-12 lg:my-6",
  },
];

export const Pricing = () => {
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
          <h2 className="text-3xl md:text-6xl font-semibold text-gray-200 text-center">
            Flexible plans for every need
          </h2>
          <div className=" max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 sm:items-center md:gap-4 ">
              {pricingTiers.map((tier) => (
                <PriceCard key={tier.title} {...tier} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
