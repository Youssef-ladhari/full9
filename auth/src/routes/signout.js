const userController = require("../controllers/userController");

const router = require("express").Router();

router.post("/api/clients/signout", userController.logout);

module.exports = router;
