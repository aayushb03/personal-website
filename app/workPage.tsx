import PageHeader from "@/components/pageHeader";
import WorkType from "@/components/workType";

export default function WorkPage() {
  const workExperience = [
    {
      company: "Barclays",
      role: "Software Engineering Intern",
      time: "June 2024 to August 2024",
      img: "workLogos/barclaysLogo.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
    },
    {
      company: "UW-Madison",
      role: "AI Undergraduate Researcher",
      time: "September 2023 to Present",
      img: "workLogos/uwMadisonLogo.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
    },
    {
      company: "Calamos Investments",
      role: "Software Development Intern",
      time: "June 2023 to August 2023",
      img: "workLogos/calamosLogo.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
    }
  ];

  return (
    <div className={"w-full flex flex-col justify-center items-center min-h-screen pt-12"} id={'experience'}>
      <PageHeader title={"Work Experience"}/>
      <div className={"flex flex-col gap-6"}>
        {workExperience.map((el, i) => (
          <WorkType key={i} {...el}/>
        ))}
      </div>
    </div>
  );
}