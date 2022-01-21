import express from "express";
const router = express();

import PointsError from "../exeptions/jobPostError.js"
import pointsController from "./controller/pointConreoller.js"

router.get("/resume/points/", async (req, res) => {
  try {
    const points = pointsController(req.body);

    res.send({
      HeaderSection: points.header,
      ExperienceSection: points.exprerience,
      EducationSection: points.education,
      OtherSection: points.other,
      SkillSection: points.skills,
      summary: points.summary,
    });
  } catch (err) {
    console.log(err);
    if (err instanceof PointsError) {
      res.status(422).send({
        errorType: err.name,
        errorMessage: err.data.message,
        errorCode: 3050,
      });
    }
  }
});

export default router;
