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

  // return (
  //   <div className="w-full bg-gray-800">
  //     <div className="container mx-auto py-8">
  //       <div className="flex flex-wrap items-center justify-center gap-y-4 gap-x-1 lg:justify-between">
  //         {products.map((product) => (
  //           <Card
  //             key={uid()}
  //             title={product.name}
  //             description={
  //               product.attributes.description
  //             }
  //             btnLabel={'Ver producto'}
  //             image={`/assets/${product.image}`}
  //           />
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Blog</h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">We use an agile approach to test
              assumptions and connect with the needs of your audience early and often.</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <article
                className="p-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="mb-5 rounded-lg"
                     src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops.png"
                     alt="office laptop working" />
              </a>
              <span
                  className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">Article</span>
              <h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Our first office</a>
              </h2>
              <p className="mb-4 font-light text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone
                many changes! After months of preparation and some hard work, we moved to our new office.</p>
              <div className="flex items-center space-x-4">
                <img className="w-10 h-10 rounded-full"
                     src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                     alt="Jese Leos avatar" />
                  <div className="font-medium dark:text-white">
                    <div>Jese Leos</div>
                    <div className="text-sm font-normal text-gray-500 dark:text-gray-400">Aug 15, 2021 · 16 min read
                    </div>
                  </div>
              </div>
            </article>
            <article
                className="p-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="mb-5 rounded-lg"
                     src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/google-hq.png" alt="Google HQ" />
              </a>
              <span
                  className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">Article</span>
              <h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">We partnered up with Google</a>
              </h2>
              <p className="mb-4 font-light text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone
                many changes! After months of preparation and some hard work, we moved to our new office.</p>
              <div className="flex items-center space-x-4">
                <img className="w-10 h-10 rounded-full"
                     src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                     alt="Roberta Casas avatar" />
                  <div className="font-medium dark:text-white">
                    <div>Roberta Casas</div>
                    <div className="text-sm font-normal text-gray-500 dark:text-gray-400">Aug 15, 2021 · 16 min read
                    </div>
                  </div>
              </div>
            </article>
            <article
                className="p-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="mb-5 rounded-lg"
                     src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops-2.png"
                     alt="office laptops" />
              </a>
              <span
                  className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">Article</span>
              <h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Our first project with React</a>
              </h2>
              <p className="mb-4 font-light text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone
                many changes! After months of preparation and some hard work, we moved to our new office.</p>
              <div className="flex items-center space-x-4">
                <img className="w-10 h-10 rounded-full"
                     src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png"
                     alt="Sofia McGuire avatar" />
                  <div className="font-medium dark:text-white">
                    <div>Sofia McGuire</div>
                    <div className="text-sm font-normal text-gray-500 dark:text-gray-400">Aug 15, 2021 · 16 min read
                    </div>
                  </div>
              </div>
            </article>
          </div>
        </div>
      </section>
  )
};
