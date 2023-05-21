import express from 'express';
const router = express.Router();
import { getAllUsers, getUserByID, createUser, updateUser, deleteUser } from '../controller/userController.js';

router.get('/users', getAllUsers);
router.get('/users/:id', getUserByID);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);


export default router;