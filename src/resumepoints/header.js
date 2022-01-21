import ResumePoints from "./pointsManager.js";

const personalScore =  function presonalScore(personal, socialLnks) {
  const personalDetails1 = [
    personal.firstName,
    personal.lastName,
    socialLnks.items,
    personal.address
  ];

  const personalDetails2 = [
    personal.phone,
    personal.subtitle,
    personal.email,
  ];
  console.log(personalDetails1);
  console.log(personalDetails2);

  const points = new ResumePoints();
  const finalScore_header = [];
  const personalTotal = points.pointscollector(personalDetails1).length +
    points.pointscollector(personalDetails2).length * 2;

  finalScore_header.push(personalTotal);

  return finalScore_header;
}


export default personalScore;