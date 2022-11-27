import { Card } from '../atoms/Card';
import { uid } from 'uid';
import { useEffect, useState } from 'react';
import { useProducts } from '../../shared/service';
import type { TProduct } from '../../shared/product';

export const Products = () => {
  const [products, setProducts] = useState<Array<TProduct>>([]);
  const { productsData } = useProducts();

  useEffect(() => {
    setProducts(productsData);

    return () => {
      setProducts([])
    }
  }, [productsData]);

  return (
    <div className="w-full bg-gray-800">
      <div className="container mx-auto py-8">
        <div className="flex flex-wrap items-center justify-center gap-y-4 gap-x-1 lg:justify-between">
          {products.map((product) => (
            <Card
              key={uid()}
              title={product.name}
              description={
                product.attributes.description
              }
              btnLabel={'Ver producto'}
              image={`/assets/${product.image}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
