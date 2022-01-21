import { count } from "countable";
import PointsError from "./exeptions/jobPostError.js";

class ResumePoints {
  pointscollector(points) {
    const details = [];
    function personal(item) {
      if (item === undefined) {
        throw new PointsError(`Resume Points Error`)
      }
      if (item === false) {
      }
      if (item.length !== 0) details.push(1);
    }
    points.forEach(personal);
    return details;
  }
  summaryScore(summary) {
    const summarys = [];
    const para = count(summary, async (counter) => {
      const sent = counter.sentences;
      const words = counter.characters;
      if (words < 10)  summarys.push(0);
      else if (20 <= words <= 100)  summarys.push(18);
      else if (200 > words > 100)  summarys.push(8);
      else if (words > 200)  summarys.push(6);
    });
    return summarys;
  }
  eduAndExpScore(finalscore_EXP, array) {
    const totalScore = [];
    let total = 0;
    for (const x in finalscore_EXP) {
      total += finalscore_EXP[x];
      totalScore.push(total);
    }
    const finalExp_Score = [];
    finalExp_Score.push(totalScore[totalScore.length - 1] / array.length);
    return finalExp_Score;
  }

  skillsScore(softSkills, hardSkills) {
    const softScore = [];
    const hardScore = [];
    const finalScore = [];

    const softLength = softSkills;
    const hardLength = hardSkills;

    if (softLength.length === 0) {
      softScore.push(0);
    } else if (softLength.length <= 3) {
      softScore.push(3);
    } else if (softLength.length <= 4) {
      softScore.push(4);
    } else if (softLength.length <= 5) {
      softScore.push(5);
    } else softScore.push(7);

    if (hardLength.length == 0) {
      hardScore[0] = 0;
    } else if (hardLength.length <= 3) {
      hardScore.push(3);
    } else if (hardLength.length <= 4) {
      hardScore.push(4);
    } else if (hardLength.length <= 5) {
      hardScore.push(5);
    } else if (hardLength.length <= 6) {
      hardScore.push(6);
    } else hardScore.push(8);

    // finalScore.push(softScore[0] + hardScore[0]);
    // return finalScore;

    return {
      softSkills: softScore[0],
      hardSkills: hardScore,
    };
  }
   resumeSummary(summary) {
    const summarys = [];
    const para = count(summary, async (counter) => {
      const sent = counter.sentences;
      const words = counter.characters;
      if (words <= 10)  summarys.push(0);
      else if (11 < words <= 40)  summarys.push(5);
      else if (41 < words <= 130)  summarys.push(25);
      else if (131 < words <= 150)  summarys.push(20);
      else if (words > 151)  summarys.push(12);
    });
    return summarys;
   }
}

export default ResumePoints;
