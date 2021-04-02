const router = require("express").Router();
const userController = require("../controllers/userController");

router.post("/api/clients/signup", userController.createUser);
module.exports = router;
