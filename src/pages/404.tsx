import type { NextPage } from "next";
import Link from "next/link";

const NotFound404: NextPage = () => {
  return (
    <section
      id="not-found"
      className="flex flex-col items-center justify-center gap-16 py-28 px-6 md:px-24 md:py-20 lg:flex-row lg:gap-28 lg:py-32"
    >
      <div className="w-full lg:w-1/2">
        <img
          className="hidden lg:block"
          src="https://i.ibb.co/v30JLYr/Group-192-2.png"
          alt=""
        />
        <img
          className="hidden md:block lg:hidden"
          src="https://i.ibb.co/c1ggfn2/Group-193.png"
          alt=""
        />
        <img
          className="md:hidden"
          src="https://i.ibb.co/8gTVH2Y/Group-198.png"
          alt=""
        />
      </div>
      <div className="w-full lg:w-1/2">
        <h1 className="py-4 text-3xl font-extrabold text-gray-800 lg:text-4xl">
          Looks like you've found the doorway to the great nothing
        </h1>
        <p className="py-4 text-base text-gray-800">
          The content you’re looking for doesn’t exist. Either it was removed,
          or you mistyped the link.
        </p>
        <p className="py-2 text-base text-gray-800">
          Sorry about that! Please visit our hompage to get where you need to
          go.
        </p>
        <div className="my-4 w-full rounded-md border bg-indigo-600 px-1 py-5 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50 sm:px-16 lg:w-auto">
          <Link href="/">Go back to Homepage</Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound404;
