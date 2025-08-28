import { Skeleton } from "./ui/skeleton";

const ProductCardSkeleton = () => {
  return (
    <div className="shadow-lg rounded-lg overflow-hidden flex flex-col">
      {/* image skeleton */}
      <div className="relative aspect-[2/3]">
        <Skeleton className="w-full h-full" />
      </div>

      {/* info skeleton */}
      <div className="flex flex-col gap-4 p-4 flex-1">
        <Skeleton className="h-5 w-2/3" /> {/* product name */}
        <Skeleton className="h-4 w-full" /> {/* short description */}
        <div className="text-xs flex items-center gap-4">
          {/* size skeleton */}
          <div className="flex flex-col gap-1">
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-8 w-20 rounded-md" />
          </div>
          {/* color skeleton */}
          <div className="flex flex-col gap-1">
            <Skeleton className="h-4 w-12" />
            <div className="flex gap-2">
              <Skeleton className="w-5 h-5 rounded-full" />
              <Skeleton className="w-5 h-5 rounded-full" />
              <Skeleton className="w-5 h-5 rounded-full" />
            </div>
          </div>
        </div>
        {/* price + button skeleton */}
        <div className="flex items-center justify-between mt-auto">
          <Skeleton className="h-5 w-16" />
          <Skeleton className="h-8 w-24 rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
