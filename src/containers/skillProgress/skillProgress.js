import React, {useContext} from "react";
import "./Progress.scss";
import {illustration, techStack,skillsSection} from "../../portfolio";
import { PieChart, Pie, Cell} from 'recharts';
import {Fade} from "react-reveal";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import { Tooltip } from "chart.js";
import StyleContext from "../../contexts/StyleContext";


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042','#48f2ff','#f31f62','#3f02f7'];
const data = skillsSection.languages




const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name, value }) => {
  
  const radius = outerRadius * 1.17; 
  const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
  const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));


 
 

  return (
    <text x={x} y={y} fill="#ece91e" textAnchor={x > cx ? 'start' : 'end'}  dominantBaseline="central"   fontFamily="Verdana"  fontSize={15} letterSpacing={2} stroke="#e84d4d" strokeWidth={0.5} wordSpacing={3}   className= "chart" >
      
      {`${name} ${(percent * 100).toFixed(0)}%`}
      
    </text>
  );
};

export default function StackProgress() {
  const {isDark} = useContext(StyleContext);
  if (techStack.viewSkillBars) {
    return (


      <Fade bottom duration={1000} distance="20px">
        <div className="skills-container">
          <div className="skills-bar">
            <h1 className="skills-heading" id="ffi">Proficiencies</h1>
            {techStack.experience.map((exp, i) => {
              const progressStyle = {
                width: exp.progressPercentage
              };
              return (
                


                <div key={i} className="skill">
                  <p>{exp.Stack}</p>
                  <div className="meter">
                    <span style={progressStyle}></span>
                  </div>
                </div>
              );
            })}
          </div>
          <ul id="pc">

            <li>
          <div className="skills-image">
            {illustration.animated ? (
              <DisplayLottie animationData={Build} />
            ) : (
              <img
                alt="Skills"
                src={require("../../assets/images/skill.svg")}
              />
            )}
          </div>
          </li>


                

           <li>   
          <div className={isDark ? "dark-mode pie" : "pie"}>
            
           
            <PieChart width={900} height={600} >
            
        <Pie
          data={data}
          cx={500}
          cy={270}
          innerRadius={100}
          outerRadius={170}
          fill="#e84d4d"
          labelLine={true}
          label={renderCustomizedLabel}
          paddingAngle={6}
          dataKey="value"
          className="chart"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        <Tooltip/>  
         
        </Pie>
       
      </PieChart>

          </div>
          </li>

         </ul>
        </div>

      </Fade>
    );
  }
  return null;
}
