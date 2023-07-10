import React from "react";

const AboutLayout = ({children}) => {
  return (
    <div>
      <div className="overflow-hidden mt-16 bg-cyan-600 py-10 sm:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1  gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-white-600">
                  About Us
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-white-900  sm:text-4xl">
                  A better way know to us
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default AboutLayout;
