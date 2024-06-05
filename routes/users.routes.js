import { Router } from "express";
import { getUsers, createUser, updateUser, deleteUser } from '../controllers/users.controller.js'

const router = Router()


router.get('/', getUsers)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.post('/', createUser)


export default router