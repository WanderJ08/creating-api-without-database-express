import { Router } from "express";
import { getProducts,updateProduct,deleteProduct,createProduct } from '../controllers/products.controller.js'

const router = Router()


router.get('/', getProducts)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)
router.post('/', createProduct)


export default router