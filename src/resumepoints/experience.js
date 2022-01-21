import ResumePoints from "./pointsManager.js";

const experienceScore = function experienceScore(experiences) {
  const finalscore = [];

  const points = new ResumePoints();

  const array = [];
  for (const i in experiences.items) {
    array.push(i);
    const experience = experiences.items[i];

    const experience1 = [experience.position, experience.company];
    const experience2 = [
      experience.startDate,
      // experience.currentlyWorking,
      experience.endDate,
    ];

    const experienceTotal = points.summaryScore(experience.summary).values().next().value + 
      points.pointscollector(experience2).length +
      points.pointscollector(experience1).length * 4;

    finalscore.push(experienceTotal);
  }
  return points.eduAndExpScore(finalscore, array);
}


export default experienceScore;