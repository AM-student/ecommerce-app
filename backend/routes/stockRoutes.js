import express from 'express';
const router = express.Router();
import { getAllStocks, getStockByID, createStock, updateStock, deleteStock } from '../controller/StockController.js';

router.get('/stocks', getAllStocks);
router.get('/stocks/:id', getStockByID);
router.post('/stocks', createStock);
router.put('/stocks/:id', updateStock);
router.delete('/stocks/:id', deleteStock);


export default router;