import React from "react";
import { Icon } from "@iconify/react";

const skills = [
  { name: "React JS", icon: "logos:react", color: "border-cyan-300" },
  { name: "Bootstrap", icon: "devicon:bootstrap", color: "border-purple-300" },
  { name: "Type Script", icon: "logos:typescript-icon", color: "border-cyan-200" },
  { name: "HTML CSS", icon: "vscode-icons:file-type-html", color: "border-blue-300" },
  { name: "UI/UX Design", icon: "logos:figma", color: "border-orange-200" },
];

const Skill = () => {
  return (
    <section className="py-12 px-6 md:px-20 bg-white  mt-10 ">
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`bg-white rounded-xl shadow-md hover:shadow-lg  transition-all duration-300 w-55 h-54 flex flex-col items-center justify-center 
              hover:scale-110 -transform
                -mt-38 z-10 relative text-center border-b-4 ${skill.color}`}
          >
            <Icon icon={skill.icon} className="text-8xl mb-3" />
            <p className="text-base font-semibold text-gray-800">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;