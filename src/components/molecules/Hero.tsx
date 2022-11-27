import Link from "next/link";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="container flex flex-col items-center justify-center gap-12 px-4 py-16"
    >
      <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
        Servicio tecnico de impresoras, fotocopiadoras
      </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
        <Link
          className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
          href="https://create.t3.gg/en/usage/first-steps"
        >
          <h3 className="text-2xl font-bold">Lorem, ipsum dolor.</h3>
          <div className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            perferendis.
          </div>
        </Link>
        <Link
          className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
          href="https://create.t3.gg/en/introduction"
        >
          <h3 className="text-2xl font-bold">Lorem, ipsum dolor.</h3>
          <div className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro ab
            eos minima, quos qui esse.
          </div>
        </Link>
      </div>
    </section>
  );
};