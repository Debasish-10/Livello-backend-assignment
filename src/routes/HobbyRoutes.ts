import { Router } from 'express';
import {
  getHobbies,
  getHobby,
  createHobby,
  updateHobby,
  deleteHobby,
} from '../controllers/HobbyController';
import { validatePayload } from '../middlewares/validate';
import { createHobbySchema, updateHobbySchema } from '../validation';

const router = Router();

router.get('/', getHobbies);
router.get('/:id', getHobby);
router.post('/', validatePayload(createHobbySchema), createHobby);
router.put('/:id', validatePayload(updateHobbySchema), updateHobby);
router.delete('/:id', deleteHobby);

export default router;
