import Link from "next/link";
import type { FC } from "react";
import { uid } from 'uid';

export interface ServiceProps {
  title: string;
  description: string;
}

const Service: FC<ServiceProps> = ({ title, description }) => {
  return (
    <Link
      className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
      href="https://create.t3.gg/en/usage/first-steps"
    >
      <h3 className="text-2xl font-bold">{title}</h3>
      <div className="text-lg">{description}</div>
    </Link>
  );
};

const servicesData = [
  {
    title: "Recarga de cartuchos",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,perferendis.",
  },
  {
    title: "Recarga de cartuchos",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,perferendis.",
  },
  {
    title: "Recarga de cartuchos",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,perferendis.",
  },
];

export const OurServices = () => {
  return (
    <section
      id="hero"
      className="flex w-full flex-col items-center justify-center gap-12 bg-gradient-to-b from-[#02165c] to-[#15162c] px-4 py-16"
    >
      <h2 className="text-5xl font-extrabold tracking-tight text-white sm:text-[3rem]">
        Nuestros servicios
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {servicesData.map(({ title, description }) => (
          <Service key={uid()} title={title} description={description} />
        ))}
      </div>
    </section>
  );
};
