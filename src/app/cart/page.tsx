import { use } from "react";
import { StepsIndicator, CartSummary, CartSteps } from "@/components/cart";

const CartPage = ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const step = use(searchParams).step;
  const activeStep = parseInt(step as string) || 1;
  return (
    <div className="flex flex-col gap-8 items-center justify-center mt-12">
      <h1 className="text-2xl font-medium">Your shopping cart</h1>

      {/* steps */}
      <StepsIndicator activeStep={activeStep} />

      <div className="w-full flex flex-col lg:flex-row gap-16">
        {/* cart items */}
        <CartSteps activeStep={activeStep} />

        {/* total */}
        <CartSummary activeStep={activeStep} />
      </div>
    </div>
  );
};
export default CartPage;
