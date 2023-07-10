import React from "react";
import Link from "next/link";
import {FaStar, FaCodeBranch, FaEye} from "react-icons/fa";

async function fetchRepo(name) {
  const response = await fetch(
    `https://api.github.com/repos/Asad-Saeed/${name}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const repo = await response.json();
  return repo;
}

const ReposData = async ({name}) => {
  const Repo = await fetchRepo(name);
  return (
    <div>
      <>
        <h2>{Repo.name}</h2>
        <p>{Repo.description}</p>
        <div className="card-stats">
          <div className="card-stat">
            <FaStar />
            <span>{Repo.stargazers_count}</span>
          </div>
          <div className="card-stat">
            <FaCodeBranch />
            <span>{Repo.forks_count}</span>
          </div>
          <div className="card-stat">
            <FaEye />
            <span>{Repo.watchers_count}</span>
          </div>
        </div>
      </>
    </div>
  );
};

export default ReposData;
