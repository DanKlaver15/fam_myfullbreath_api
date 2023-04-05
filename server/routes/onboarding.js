const express = require("express");
const router = express.Router();
const buildingSurveyController = require("../controllers/buildingSurveyController");
const healthSurveyController = require("../controllers/healthSurveyController");

router.route("/building_survey").post(buildingSurveyController.submitResponses);
router.route("/health_survey").post(healthSurveyController.submitResponses);

module.exports = router;