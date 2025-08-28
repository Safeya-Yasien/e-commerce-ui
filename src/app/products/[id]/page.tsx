import ProductInteraction from "@/components/ProductInteraction";
import { products } from "@/data/products";
import Image from "next/image";

export const generateMetadata = async ({
  params,
}: {
  params: { id: string };
}) => {
  const productId = parseInt(params.id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="text-center mt-12">
        <h1 className="text-xl font-semibold">Product not found</h1>
        <p className="text-gray-500">
          This item doesn&apos;t exist in our store.
        </p>
      </div>
    );
  }

  return {
    title: product.name,
    description: product.description,
  };
};

const ProductPage = ({ params }: { params: { id: string } }) => {
  const productId = parseInt(params.id);

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="flex flex-col gap-4 lg:flex-row md:gap-12 mt-12">
      {/* IMAGE */}
      <div className="w-full lg:w-5/12 relative aspect-[2/3]">
        <Image
          src={product.images[product.colors[0]]}
          alt={product.name}
          fill
          className="object-contain rounded-md"
        />
      </div>
      {/* DETAILS */}
      <div className="w-full lg:w-7/12 flex flex-col gap-4">
        <h1 className="text-2xl font-medium">{product.name}</h1>
        <p className="text-gray-500">{product.description}</p>
        <h2 className="text-2xl font-semibold">${product.price.toFixed(2)}</h2>

        {/* product interaction */}
        <ProductInteraction product={product} />

        {/* CARD INFO */}
        <div className="flex items-center gap-2 mt-4">
          <Image
            src="/klarna.png"
            alt="Pay later with Klarna"
            width={50}
            height={25}
            className="rounded-md"
          />
          <Image
            src="/cards.png"
            alt="Supported credit cards"
            width={50}
            height={25}
            className="rounded-md"
          />
          <Image
            src="/stripe.png"
            alt="Secure payments powered by Stripe"
            width={50}
            height={25}
            className="rounded-md"
          />
        </div>
        <p className="text-gray-500 text-xs">
          By clicking Pay Now, you agree to our{" "}
          <span className="underline hover:text-black">Terms & Conditions</span>{" "}
          and <span className="underline hover:text-black">Privacy Policy</span>
          . You authorize us to charge your selected payment method for the
          total amount shown. All sales are subject to our return and{" "}
          <span className="underline hover:text-black">Refund Policies</span>.
        </p>
      </div>
    </div>
  );
};
export default ProductPage;
