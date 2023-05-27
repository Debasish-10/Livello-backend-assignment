import { Router } from 'express';
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateuser,
} from '../controllers/UserController';
import { validatePayload } from '../middlewares/validate';
import { createUserSchema, updateUserSchema } from '../validation';

const router = Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', validatePayload(createUserSchema), createUser);
router.put('/:id', validatePayload(updateUserSchema), updateuser);
router.delete('/:id', deleteUser);

export default router;
