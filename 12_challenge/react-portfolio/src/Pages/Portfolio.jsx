import ProjectCard from "../components/ProjectCard";

function Portfolio() {
  const projects = [
    { title: "Indexd", bgImg: "bg-card-1", url: "https://github.com/Danr55/Indexd" },
    { title: "Employee Tracker", bgImg: "bg-card-2", url: "https://github.com/Ddan71117/Module-10-Challenge" },
    { title: "README Generator", bgImg: "bg-card-3", url: "https://github.com/Ddan71117/Module-7-Challenge" },
    { title: "Vehicle Builder", bgImg: "bg-card-4", url: "https://github.com/Ddan71117/Module-8-Challenge" },
    { title: "Weather Dashboard", bgImg: "bg-card-5", url: "https://github.com/Ddan71117/Module-9-Challenge" },
    { title: "React Portfolio", bgImg: "bg-card-6", url: "https://github.com/Ddan71117/Module-12-Challenge" },
  ];
  return (
    <>
      <div>
        <div className="flex flex-wrap gap-10 justify-center p-3 mt-7">
          {projects.map((project, index) => (
            <ProjectCard key={index} title={project.title} bgImg={project.bgImg} url={project.url} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Portfolio