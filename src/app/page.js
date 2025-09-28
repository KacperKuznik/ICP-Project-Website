import Project from "@/components/Project";
import About from "@/components/About";
import Assignments from "@/components/Assignments";

export default function Home() {
  return (
    <div className="flex flex-col space-y-4">
      <About />
      <Assignments />
      <Project />
    </div>
  );
}
