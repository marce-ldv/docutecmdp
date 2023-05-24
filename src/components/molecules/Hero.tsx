import { ModelFBX } from '../atoms/ModelFBX';

// export const Hero = () => {
//   return (
//     <section className="relative w-full overflow-hidden">
//       <div className="pt-10 pb-14 sm:pt-16 lg:overflow-hidden lg:pt-24 lg:pb-24">
//         <div className="mx-auto max-w-5xl lg:px-8">
//           <div className="lg:grid lg:grid-cols-2 lg:gap-8">
//             <div className="mx-auto max-w-md px-4 text-center sm:max-w-2xl sm:px-6 lg:flex lg:items-center lg:px-0 lg:text-left">
//               <div className="lg:py-24">
//                 <h1 className="mt-4 text-4xl font-bold tracking-tighter text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
//                   <span className="block text-red-600">Docutec</span>
//                   <span className="block text-gray-300">Servicio tecnico</span>
//                 </h1>
//                 <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
//                   Our Website will launch soon. Join the waitlist to try the
//                   beta before its publicly available.
//                 </p>
//                 <div className="mt-10 sm:mt-12">
//                   <form
//                     className="sm:mx-auto sm:max-w-xl lg:mx-0"
//                     action="https://api.web3forms.com/submit"
//                   >
//                     <div className="sm:flex">
//                       <input
//                         type="hidden"
//                         name="access_key"
//                         value="YOUR_ACCESS_KEy_HERE"
//                       />
//                       <input
//                         type="hidden"
//                         name="subject"
//                         value="New Waitlist"
//                       />
//                       <div className="min-w-0 flex-1">
//                         <label htmlFor="email" className="sr-only">
//                           Email address
//                         </label>
//                         <input
//                           id="email"
//                           type="email"
//                           placeholder="Enter your email"
//                           className="block w-full rounded-md border-0 bg-gray-200 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
//                           value=""
//                           autoComplete="off"
//                         />
//                       </div>
//                       <div className="mt-3 sm:mt-0 sm:ml-3">
//                         <button
//                           type="submit"
//                           className="block w-full rounded-md bg-red-600 py-3 px-4 font-medium text-white shadow hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900"
//                         >
//                           Contactanos
//                         </button>
//                       </div>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//             <div className="mt-12 hidden lg:block">
//               {/*position={[0.025, -0.9, 0]}*/}
//               <ModelFBX />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

export const Hero = () => {
  return (
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Payments
              tool for software companies</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From
              checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment
              stack.</p>
            <a href="#"
               className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              Get started
              <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                   xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"></path>
              </svg>
            </a>
            <a href="#"
               className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              Speak to Sales
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            {/*<img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" />*/}
            <ModelFBX />
          </div>
        </div>
      </section>
  );
};
