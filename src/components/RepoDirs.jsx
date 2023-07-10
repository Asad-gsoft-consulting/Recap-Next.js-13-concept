import Link from "next/link";

async function fetchRepoContents(name) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch(
    `https://api.github.com/repos/Asad-Saeed/${name}/contents`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const contents = await response.json();
  return contents;
}

const RepoDirs = async ({name}) => {
  const contents = await fetchRepoContents(name);
  const dirs = contents.filter((content) => content.type === "dir");

  return (
    <div className=" text-start ">
      <h3 className="py-5">Directories</h3>
      <ul className="underline px-5">
        {dirs.map((dir) => (
          <li className="list-disc px-5" key={dir.path}>
            <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RepoDirs;
