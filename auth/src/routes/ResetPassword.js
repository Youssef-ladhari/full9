const router = require("express").Router();
const userController = require("../controllers/userController");

router.post("/api/clients/resetpassword", userController.resetpassword);
module.exports = router;
