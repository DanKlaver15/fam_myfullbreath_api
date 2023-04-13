const mongoose = require("mongoose");

const buildingSurveySchema = new mongoose.Schema(
	{
		userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
		buildingType: { type: Number, required: true, default: 0 },
		childcareType: { type: Number, required: true, default: 0 },
		headStart: { type: Boolean, required: true, default: false },
		otherAccreditationType: { type: Number, required: true, default: 0 },
		otherAccreditationTypeOther: { type: String, default: "" },
		centerAsthmaPolicy: { type: [{ Boolean, String }], required: true },
		totalAllowableEnrollment: { type: Number, required: true, default: 0 },
		totalAllowableEnrollmentUnderFive: { type: Number, required: true, default: 0 },
		weekdayHoursOpen: { type: Date, required: true, default: Date.now },
		weekdayHoursClose: { type: Date, required: true, default: Date.now },
		saturdayHoursOpen: { type: Date, required: true, default: Date.now },
		saturdayHoursClose: { type: Date, required: true, default: Date.now },
		sundayHoursOpen: { type: Date, required: true, default: Date.now },
		sundayHoursClose: { type: Date, required: true, default: Date.now },
		centerCleaningService: { type: Number, required: true, default: 0 },
		hvacMaintenanceType: { type: Number, required: true, default: 0 },
		smokeInBuilding: { type: Boolean, required: true, default: false },
		smellTobaccoFreq: { type: Number, required: true, default: 0 },
		petInBuilding: { type: Boolean, required: true, default: false },
		cookingType: { type: [{ Boolean, String }], required: true },
		cookingTypeOther: { type: String, default: "" },
		recentPestControlType: { type: [{ Boolean, String }], required: true },
		moldInBuilding: { type: Boolean, required: true, default: false },
	});

module.exports = { buildingSurveySchema };