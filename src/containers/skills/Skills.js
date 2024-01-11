import React, {useContext} from "react";
import "./Skills.scss";
import { BarChart, Bar,Cell, Rectangle, XAxis, Tooltip } from 'recharts';
import {illustration, skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import StyleContext from "../../contexts/StyleContext";

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        
        <Fade left duration={1000}>
          <div className="skills-image-div">
          
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt="Man Working"
                src={require("../../assets/images/developerActivity.svg")}
              ></img>
            )}
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"} id="ffs"
            >
              {skillsSection.title}{" "}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>

           <SoftwareSkill/>
                  
            <div>
            <Fade right duration={1000}>
            <div className="barchart-main-div">
            
            
                <BarChart
                width={600}
                height={350}
                data={skillsSection.softwareSkills}
                margin={{
                    top: 10,
                    right: 20,
                    left: 20,
                    bottom: 15,
                }}
                >
                
                <XAxis dataKey="name" />
               
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} >
                {skillsSection.softwareSkills.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
                  </Bar>
                </BarChart>
      
            </div>
            </Fade>
        </div>
      
          

            <div>
              {skillsSection.skills.map((skills, i) => {
                return (
                  <p
                    key={i}
                    className={
                      isDark
                        ? "dark-mode subTitle skills-text"
                        : "subTitle skills-text"
                    }
                  >
                    {skills}
                  </p>
                );
              })}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
