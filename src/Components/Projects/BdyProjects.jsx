import React from "react";
import productsState from "../product-atom";
import { useRecoilState } from "recoil";

const BdyProjects = () => {
  const [data, setData] = useRecoilState(productsState);

  return (
    <div className=" p-5 px-6 ">
      <h1 className="mt-6 text-black text-4xl">Projects</h1>
      <div className="flex flex-wrap justify-around gap-3 mt-6">
        {data.map((e) => (
          <div
            key={e.id}
            className="py-5 my-3 w-72 px-4 rounded-lg border border-blue-950 flex flex-col justify-center items-center"
          >
            <img
              src={e.src}
              alt="quiz"
              className=" w-[19rem] h-56 object-cover max-w-full"
            />
            <div className="text-center pt-5">
              <h2 className="text-black font-semibold" key={e.id}>
                {e.name}
              </h2>
              <p className="text-zinc-500 text-[14px] pt-2" key={e.id}>
                {e.description}
              </p>
            </div>
            <a
              href={e.href}
              target="_blank"
              className="w-fit hover:scale-[103%] hover rounded-badge text-white font-semibold py-2 px-4 bg-darkblue-500 mt-5"
            >
              live Preview
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BdyProjects;
