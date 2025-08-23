import { steps } from "@/data/cartSteps";

const StepsIndicator = ({ activeStep }: { activeStep: number }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
      {steps.map((step) => (
        <div
          key={step.id}
          className={`flex items-center gap-2 border-b-2 pb-4 ${
            activeStep === step.id ? "border-gray-800" : "border-gray-200"
          }`}
        >
          <div
            className={`w-8 h-8 rounded-full bg-black text-white flex items-center justify-center
                ${activeStep === step.id ? "bg-gray-800" : "bg-gray-400"}`}
          >
            {step.id}
          </div>
          <p
            className={`font-medium text-sm ${
              activeStep === step.id ? "text-gray-800" : "text-gray-400"
            }`}
          >
            {step.title}
          </p>
        </div>
      ))}
    </div>
  );
};
export default StepsIndicator;
