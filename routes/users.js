import { getUsers, postUsers, getUser, deleteUser, updateUser } from "../controllers/users.js";
import express from 'express';

const router = express.Router();

router.get('/', getUsers);

router.post('/', postUsers)

router.get('/:id', getUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

export default router;