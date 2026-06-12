import BdyProjects from "../Components/Projects/BdyProjects";
import BtnProjects from "../Components/Projects/BtnProjects";

function Projects() {
  return (
    <div className="bg-[var(--primary-color)] pb-6" id="project">
      <BdyProjects />
      <BtnProjects />
    </div>
  );
}
export default Projects;
