import { Card } from "../atoms/Card";
import { uid } from "uid";

export const Products = () => {
  return (
    <>
      <div className="w-full bg-gray-800">
        <div className="container mx-auto py-8">
          <div className="flex flex-wrap items-center justify-center gap-y-4 gap-x-1 lg:justify-between">
            {[...Array(10)].map((product) => (
              <Card
                key={uid()}
                title={"Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport"}
                description={
                  "The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot amazing videos"
                }
                btnLabel={"buy"}
                image={"https://flowbite.com/docs/images/blog/image-1.jpg"}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
