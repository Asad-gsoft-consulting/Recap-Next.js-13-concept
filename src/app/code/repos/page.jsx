import React from "react";
import Link from "next/link";
import {FaStar, FaCodeBranch, FaEye} from "react-icons/fa";

async function fetchRepos() {
  const response = await fetch("https://api.github.com/users/Asad-Saeed/repos",{
    next:{
      revalidate:60,
    }
  });
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const repos = await response.json();
  return repos;
}

const Repos = async () => {
  const Repos = await fetchRepos();

  return (
    <div>
      <div className="bg-white">
        <div className="relative isolate px-6 pt-14 lg:px-8">
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
            <h1 className="text-4xl text-center font-bold tracking-tight text-gray-900 sm:text-6xl">
              My Repositories
            </h1>
            <div className="text-start">
              <div className="repos-container">
                <ul className="repo-list">
                  {Repos.map((repo) => (
                    <li key={repo.id}>
                      <Link href={`/code/repos/${repo.name}`}>
                        <h3>{repo.name}</h3>
                        <p>{repo.description}</p>
                        <div className="repo-details">
                          <span>
                            <FaStar /> {repo.stargazers_count}
                          </span>
                          <span>
                            <FaCodeBranch /> {repo.forks_count}
                          </span>
                          <span>
                            <FaEye /> {repo.watchers_count}
                          </span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repos;
