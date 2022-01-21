import ResumePoints from './pointsManager.js';


const educationScore = function educationScore(educations) {
  const finalscore = [];

  const points = new ResumePoints();

  const array = [];
  for (const i in educations.items) {
    array.push(i);
    const education = educations.items[i];

    const education1 = [education.degree];
    const education2 = [
      education.institution,
      education.field,
      education.startDate,
      // education.stillStuding,
      // education.city,
    ];

    const educationTotal = points.summaryScore(education.summary).values().next().value +
      points.pointscollector(education2).length +
      points.pointscollector(education1).length * 2;

    finalscore.push(educationTotal);
  }
  return points.eduAndExpScore(finalscore, array);
}
export default educationScore;