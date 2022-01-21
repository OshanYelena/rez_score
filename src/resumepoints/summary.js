import ResumePoints from "./pointsManager.js";

const summarySore = function summaryScore(summary) {
  const finalScore = [];
  // const Summary = summary.replace(/<[^>]*>?/gm, "");

  const points = new ResumePoints();

  finalScore.push(points.resumeSummary(summary));

  return finalScore;
}

export default summarySore;
 