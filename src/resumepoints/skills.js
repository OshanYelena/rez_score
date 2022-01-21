import ResumePoints from "./pointsManager.js";

const skillSelection =  function skillSection(soft, 
  // hard
  
  ) {
  const FinalScore = [];

  const Skills = {
    softSkills: soft,
    // hardSkills: hard,
  };
  const skillArray = {
    softArray: [],
    // hardArray: [],
  };


  for (const i in Skills.softSkills.items) {
    skillArray.softArray.push(Skills.softSkills.items[i].name);
  }
  console.log(skillArray.softArray.length);
  // for (const i in Skills.hardSkills) {
  //   skillArray.hardArray.push(Skills.hardSkills[i]);
  // }
  const points = new ResumePoints();

  // FinalScore.push(points.skillsScore(skillArray.softArray, skillArray.hardArray));
  return points.skillsScore(skillArray.softArray,
    //  skillArray.hardArray
     );

  // console.log(finalScore);
}


export default skillSelection;