import ResumePoints from './pointsManager.js';


const otherSections =  function otherSections(resume) {
    const personalDetails1 = [
        resume.awards.items[0],
        resume.certifications.items[0],
        resume.hobbies.items[0],
    ];
    const personalDetails2 = [
        resume.languages.items[0]
    ]
    console.log(personalDetails1);
  
    const points = new ResumePoints();
    const finalScore_header = [];
    const personalTotal = points.pointscollector(personalDetails1).length * 2 +
    points.pointscollector(personalDetails2).length * 4;

    console.log(resume.work.items[0]);

    if(resume.work.items[0]== undefined){
        finalScore_header.push(personalTotal + 5);
    } else {
        finalScore_header.push(personalTotal);
    }
  

    return finalScore_header;
  }

  export default otherSections;