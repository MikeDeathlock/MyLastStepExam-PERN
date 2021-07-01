const Router = require("express");
const router = new Router();
const typeController = require('../controllers/typeController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post("/", checkRole("ADMIN"), typeController.create); // Треба зробить всюди де треба робота адміна
router.get("/", typeController.getAll);

module.exports = router