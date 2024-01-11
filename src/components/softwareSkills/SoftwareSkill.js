import React from "react";
import "./SoftwareSkill.scss";
 import {skillsSection}  from "../../portfolio";
 import StyleContext from "../../contexts/StyleContext";
import { useContext } from "react";


export default function SoftwareSkill() {

  const {isDark} = useContext(StyleContext);
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.techstack.map((skills, i) => {
            return (
              <li
                key={i}
                className={isDark? "dark-mode software-skill-inline" : "software-skill-inline"}
                name={skills.name}
              >
                <i className="logos"> {skills.logo } </i>
                <p className={isDark? "dark-mode p" : "p"}>{skills.name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
