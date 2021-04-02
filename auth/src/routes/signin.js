const router = require("express").Router();
const userController = require("../controllers/userController");

router.post("/api/clients/signin", userController.authentificate);
module.exports = router;
