import UserController from "../controllers/users.js";
import express from 'express';

const router = express.Router();

router.get('/', UserController.index);

router.post('/', UserController.store)

router.get('/:id', UserController.show);

router.delete('/:id', UserController.delete);

router.patch('/:id', UserController.update);

export default router;