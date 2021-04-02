const router = require("express").Router();
const userController = require("../controllers/userController");

router.post("/api/clients/forgotpassword", userController.forgotpassword);
module.exports = router;
