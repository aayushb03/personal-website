import PageHeader from "@/components/pageHeader";
import WorkType from "@/components/workType";

export default function WorkPage() {
  const workExperience = [
    {
      company: "Barclays",
      role: "Software Engineering Intern",
      time: "Jun 2024 - Aug 2024",
      img: "workLogos/barclaysLogo.png",
      description: "During my time at Barclays so far, I utilized Salesforce Languages such as Apex and SOQL to develop custom Lightning Web Components. These components serve as utilities for the Investment Banking team to display nearby contacts for various clients, leads, and other contacts. Each of the components and Apex controllers were developed with a focus on performance and scalability, and unit tested to ensure reliability."
    },
    {
      company: "UW-Madison",
      role: "AI Undergraduate Researcher",
      time: "Sep 2023 - Present",
      img: "workLogos/uwMadisonLogo.png",
      description: "As a researcher for the UW-Madison's #1 ranked Department of Educational Psychology, I have been fine-tuning large language models to evaluate the accuracy of educational concepts in student essays. I also built software that tests these models using LLM-generated test cases using Django and Next.js, which improves our models through reinforcement learning."
    },
    {
      company: "Calamos Investments",
      role: "Software Development Intern",
      time: "Jun 2023 - Aug 2023",
      img: "workLogos/calamosLogo.png",
      description: "At Calamos, I was tasked with the development and design of a comprehensive tools dashboard, where I designed and engineered 7 full stack applications using Angular, .NET, and SQL, aimed towards monitoring critical business functionalities. I was also responsible for replacing legacy reporting applications on Calamos's proprietary research system."
    }
  ];

  return (
    <div className={"w-full flex flex-col justify-center items-center min-h-screen pt-12"} id={'experience'}>
      <PageHeader title={"Work Experience"}/>
      <div className={"flex flex-col w-full gap-6 overflow-hidden"}>
        {workExperience.map((el, i) => (
          <WorkType key={i} {...el}/>
        ))}
      </div>
    </div>
  );
}