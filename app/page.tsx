"use client";
import NavBar from "@/app/navBar";
import HomePage from "@/app/homePage";
import AboutPage from "@/app/aboutPage";
import WorkPage from "@/app/workPage";
import ProjectPage from "@/app/projectPage";

export default function Home() {
  return (
    <div className={"flex bg-app-light-gray"}>
      <NavBar/>
      <div className={"flex w-full justify-center"}>
        <div className={"flex flex-col w-9/12"}>
          <HomePage/>
          <AboutPage/>
          <WorkPage/>
          <ProjectPage/>
        </div>
      </div>
    </div>
  );
}
