"use client";
import NavBar from "@/app/navBar";
import HomePage from "@/app/homePage";
import AboutPage from "@/app/aboutPage";
import WorkPage from "@/app/workPage";
import ProjectPage from "@/app/projectPage";
import CustomCursor from "@/components/customCursor";

export default function Home() {
  return (
    <div className={"flex bg-app-light-gray"}>
      <CustomCursor/>
      <NavBar/>
      <div className={"flex w-full justify-center"}>
        <div className={"flex flex-col md:w-9/12 w-11/12"}>
          <HomePage/>
          <AboutPage/>
          <WorkPage/>
          <ProjectPage/>
        </div>
      </div>
    </div>
  );
}
