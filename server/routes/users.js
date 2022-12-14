const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const auth = require("../middlewares/auth");
const { validateUser } = require("../middlewares/validate");

router.route("/").post(validateUser, userController.createOne);
router
  .route("/:id")
  .get(auth, userController.getOne)
  .put([auth, validateUser], userController.updateOne)
  .delete(auth, userController.removeOne);

module.exports = router;
