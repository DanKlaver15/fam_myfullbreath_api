const User = require("../models/user");
const BuildingSurvey = require("../models/buildingSurvey");
const query = require("../utils/query");

const submitResponses = async (req, res) => {
  const { email } = req.params;

  try {
    const user = await query.findOne(User, { email });

    if (!user)
      return res.status(401).send({ error: "User not found" });

    const submittedResponses = await query.createOne(BuildingSurvey, req.body);

    return res.status(201).send({ responses: submittedResponses });
  } catch (err) {
    return res.status(500).send({ error: err });
  }
};

module.exports = {
	submitResponses,
};