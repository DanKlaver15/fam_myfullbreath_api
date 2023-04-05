const mongoose = require("mongoose");

const healthSurveySchema = new mongoose.Schema(
	{
		userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
		childName: { type: String, required: true, trime: true },
		dob: { type: Date, required: true },
		hasAsthmaDiagnosis: { type: Number, required: true, default: 0 },
		hasFatherAsthma: { type: Number, required: true, default: 0 },
		hasMotherAsthma: { type: Number, required: true, default: 0 },
		hasEczema: { type: Number, required: true, default: 0 },
		hasWheeze: { type: Number, required: true, default: 0 },
		hasWheezeWhenNotSick: { type: Number, required: true, default: 0 },
		hasAllergyTest: { type: Number, required: true, default: 0 },
		historyMotherEnvAllergies: { type: Number, required: true, default: 0 },
		historyMotherFoodAllergies: { type: Number, required: true, default: 0 },
		historyMotherEczemaDerm: { type: Number, required: true, default: 0 },
		historyFatherEnvAllergies: { type: Number, required: true, default: 0 },
		historyFatherFoodAllergies: { type: Number, required: true, default: 0 },
    historyFatherEczemaDerm: { type: Number, required: true, default: 0 },
		historyChildCroup: { type: Number, required: true, default: 0 },
		historyChildBronchiolitis: { type: Number, required: true, default: 0 },
		historyChildCovid: { type: Number, required: true, default: 0 },
		healthMold: { type: Boolean, required: true, default: false },
		childRace: { type: Number, required: true, default: 0 },
		childRaceOther: { type: String, default: "" },
		motherRace: { type: Number, required: true, default: 0 },
		motherRaceOther: { type: String, default: "" },
    fatherRace: { type: Number, required: true, default: 0 },
    fatherRaceOther: { type: String, default: "" },
	});

module.exports = { healthSurveySchema };