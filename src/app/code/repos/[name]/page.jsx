import React from "react";
import ReposData from "@/components/ReposData";
import Link from "next/link";
import RepoDirs from "@/components/RepoDirs";
import {Suspense} from "react";
import Loading from "@/components/Loading";

const RepoPage = ({params: {name}}) => {
  return (
    <div>
      <div className="bg-white">
        <div className="relative isolate px-6 pt-14 lg:px-8 py-96">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl py-10 ">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
            <div className="text-center">
              <h1 className="text-4xl font-bold text-center tracking-tight text-gray-900 sm:text-6xl">
                Repo Name
              </h1>
              <div className="repos-container text-start">
                <div className="card">
                  <Link
                    href="/code/repos"
                    className="btn btn-back rounded-full"
                  >
                    Back To Repositories
                  </Link>
                  <Suspense fallback={<h1>Loading Repo...</h1>}>
                    <ReposData name={name} />
                  </Suspense>
                  <Suspense fallback={<Loading />}>
                    <RepoDirs name={name} />
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoPage;
