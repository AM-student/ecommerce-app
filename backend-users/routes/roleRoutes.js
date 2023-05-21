import express from 'express';
const router = express.Router();
import { getAllRoles, getRoleByID, createRole, updateRole, deleteRole } from '../controller/roleController.js';

router.get('/roles', getAllRoles);
router.get('/roles/:id', getRoleByID);
router.post('/roles', createRole);
router.put('/roles/:id', updateRole);
router.delete('/roles/:id', deleteRole);


export default router;