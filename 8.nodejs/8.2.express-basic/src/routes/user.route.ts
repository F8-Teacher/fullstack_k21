import Express from "express";
import { userController } from "../controllers/user.controller.js";
const router = Express.Router();
router.get('/', userController.findAll);
router.get('/:id', userController.find);
router.post('/', userController.create);
export default router;