import { Suspense } from 'react';
import Model from '../atoms/Model';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const Model3d = () => {
  return (
    <Canvas
      camera={{ position: [2, 0, 12.25], fov: 15 }}
    >
      <ambientLight intensity={1.25} />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={0.4} />
      <Suspense fallback={null}>
        <Model position={[0.025, -0.9, 0]} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  )
}

export const Hero = () => {
  return (
    <section className="relative overflow-hidden w-full">
      <div className="pt-10 pb-14 sm:pt-16 lg:overflow-hidden lg:pt-24 lg:pb-24">
        <div className="mx-auto max-w-5xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="mx-auto max-w-md px-4 text-center sm:max-w-2xl sm:px-6 lg:flex lg:items-center lg:px-0 lg:text-left">
              <div className="lg:py-24">
                <h1 className="mt-4 text-4xl font-bold tracking-tighter text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                  <span className="block text-red-600">Docutec  </span>
                  <span className="block text-gray-300">Servicio tecnico</span>
                </h1>
                <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Our Website will launch soon. Join the waitlist to try the
                  beta before its publicly available.
                </p>
                <div className="mt-10 sm:mt-12">
                  <form
                    className="sm:mx-auto sm:max-w-xl lg:mx-0"
                    action="https://api.web3forms.com/submit"
                  >
                    <div className="sm:flex">
                      <input
                        type="hidden"
                        name="access_key"
                        value="YOUR_ACCESS_KEy_HERE"
                      />
                      <input
                        type="hidden"
                        name="subject"
                        value="New Waitlist"
                      />
                      <div className="min-w-0 flex-1">
                        <label htmlFor="email" className="sr-only">
                          Email address
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          className="block w-full rounded-md border-0 bg-gray-200 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
                          value=""
                          autoComplete="off"
                        />
                      </div>
                      <div className="mt-3 sm:mt-0 sm:ml-3">
                        <button
                          type="submit"
                          className="block w-full rounded-md bg-red-600 py-3 px-4 font-medium text-white shadow hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                        >
                          Contactanos
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="mt-12 hidden lg:block">
              <Model3d />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
