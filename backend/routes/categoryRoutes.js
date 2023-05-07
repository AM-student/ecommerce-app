import express from 'express';
const router = express.Router();
import { getAllCategories, getCategoryByID, createCategory, updateCategory, deleteCategory } from '../controller/CategoryController.js';

router.get('/categories', getAllCategories);
router.get('/categories/:id', getCategoryByID);
router.post('/categories', createCategory);
router.put('/categories/:id', updateCategory);
router.delete('/categories/:id', deleteCategory);

export default router;