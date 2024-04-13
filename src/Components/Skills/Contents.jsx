import { useRecoilState } from "recoil";
import skill from "./skills_atom";
import add_skills from "./additional_skills";
function Contents() {
  const [skills] = useRecoilState(skill)
  const [addSkills]= useRecoilState(add_skills)
  return (
    <div className="p-5 px-6 bg-darkblue-500">
      <h1 className="mt-6 text-white text-4xl">Skills</h1>
      <div className="my-10 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2">
      {skills.map((e) => (
      <div key={e.id} className="flex flex-col justify-around p-2 items-center gap-2">
        <img className=" w-[7rem]" src={e.src} alt={e.name_skill} />
        <p className="font-bold text-white">{e.name_skill}</p>
      </div>
      ))}
    
</div>      
      <h2 className="text-2xl font-semibold py-3 text-white">
        Additional skills
      </h2>

      <ul className="text-white my-5 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2">
        {addSkills.map(e=>(
              <li key={e.id} className="flex justify-center gap-3 items-center flex-col py-5">
                  <img className="w-16" src={e.src} alt={e.name_skill} />
                    {e.name_skill}
              </li>
      ))}
      </ul>
    </div>
  );
}
export default Contents;
