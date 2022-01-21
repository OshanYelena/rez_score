import headerPoints from "../../resumepoints/header.js";
import experiencePoints from "../../resumepoints/experience.js";
import educationPoints from "../../resumepoints/education.js";
import skillPoints from "../../resumepoints/skills.js";
import otherSections from "../../resumepoints/other.js";
import summaryPoints from "../../resumepoints/summary.js";

const pointsController = (resume) => {
  return {
    header: headerPoints(resume.profile, resume.social),
    exprerience: experiencePoints(resume.work),
    education: educationPoints(resume.education),
    other: otherSections(resume), 
    skills: skillPoints(resume.skills),
    summary: summaryPoints(resume.objective.body),
  };
};
export default pointsController;
